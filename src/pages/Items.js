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
          price: data[taskey].price
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
      <ul>
        {items.map((item) => {
          <SingleItem id={item.id} name={item.name} price={item.price} />;
        })}
      </ul>
    </div>
  );
};

export default Items;