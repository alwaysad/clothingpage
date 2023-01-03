import { useParams } from "react-router-dom";
import SingleItemDetail from '../Components/SingleItemDetail'
import { useEffect, useState } from "react";

const Detail =()=>{
    const {item}=useParams();
    
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [expectedItem,setExpectedItem]=useState([]);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://clothingsite-48df9-default-rtdb.firebaseio.com/clothes.json",
          { method: "GET" }
        );
  
        if (!response.ok) {
          throw new Error("couldnt fetch the data");
        }
  
        const data = await response.json();
        const loadedClothes = [];
       
        for (const taskey in data) {
          loadedClothes.push({
            id: taskey,
            name: data[taskey].name,
            price: data[taskey].price,
            image: data[taskey].image,
            stock:data[taskey].stock,
            description:data[taskey].description
  
          });
        }
  
        setItems(loadedClothes);
      } catch (error) {
        setError(error.message);
        
      }
     
     
    };
    
    
    useEffect(() => {
      fetchData();
    }, []);
  

return <div>
{items.filter(items=>items.name===item).map(item=>(<SingleItemDetail key={item.name} id={item.id} name={item.name} price={item.price} image={item.image} stock={item.stock} description={item.description} />))}

</div>




}


export default Detail;