import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemsDetails = () => {
  const { itemsId } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/items/${itemsId}`;
    fetch(url).then((res) => res.json().then((data) => setItems(data)));
  }, []);
  return (
    <div>
      <h2>Book Now: {items.name}</h2>
      <div className="">
        <Link to="/checkout" />
      </div>
    </div>
  );
};

export default ItemsDetails;
