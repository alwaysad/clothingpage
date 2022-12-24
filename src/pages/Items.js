import { useEffect, useState } from "react";
import SingleItem from "../Components/SingleItem";

const Items = () => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

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

  return (
    
    <div className="flex justify-center items-center my-6 min-h-screen">
  
      <ul className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => ( 
          <SingleItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} stock={item.stock} description={item.description} />
        
        ))}
      </ul>
      </div>
  );
};

export default Items;
