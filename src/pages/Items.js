import { useEffect, useState } from "react";
import SingleItem from "../Components/SingleItem";

const DUMMY_DATA = [
  { id: 1, name: "shirt", price: 55 },
  { id: 2, name: "shoes", price: 30 },
  { id: 3, name: "jacket", price: 25 },
];

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
    
    <div>
        <h1>Selamlar</h1>
      <ul>
        {items.map((item) => (
          <SingleItem id={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
      </div>
  );
};

export default Items;
