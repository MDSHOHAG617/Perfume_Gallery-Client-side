import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { itemsId } = useParams();
  const [items, setItems] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    const url = `http://localhost:5000/items/${itemsId}`;
    fetch(url).then((res) => res.json().then((data) => setItems(data)));
  }, []);

  const handleDelivered = () => {
    const count = items.Quantity - 1;
    setCount(count);
  };

  return (
    <div>
      <h2 className="mt-3">Welcome to Inventory</h2>
      <div className="container d-sm-block justify-content-center align-items-center ">
        <img className=" img-fluid" src={items.img} alt="" />
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>
              {items.name} ({items.no})
            </Card.Title>
            <Card.Text>{items.description}</Card.Text>
            <p>
              Price: <span className="fw-bold">{items.price}</span>
            </p>
            <p className="">Quantity: {items.Quantity}</p>
            <p className="">Supplier: {items.supplier}</p>
            <p className="">
              Stock:{items.Quantity} <span className="text-muted">/left</span>
            </p>
            <button onClick={handleDelivered} className="btn btn-primary">
              Delivered
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Link to="/checkout" />
      </div>
    </div>
  );
};

export default Inventory;
