import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Items = ({ item }) => {
  const { _id, img, name, description, price, supplier, Quantity } = item;
  console.log(item);
  const navigate = useNavigate();

  const handleUpdateBtn = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <div className="container my-5 ">
        <Card className="">
          <img className="w-75 m-4 " src={img} alt="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <p className="">
              Price: <span className="fw-bold">{price}</span>
            </p>
            <p className="">Quantity: {Quantity}</p>
            <p className="">Supplier: {supplier}</p>
          </Card.Body>
          <Card.Footer>
            <small>
              <button
                onClick={() => handleUpdateBtn(_id)}
                className="btn btn-primary text-white "
              >
                Stock Update
              </button>
            </small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Items;
