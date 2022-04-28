import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Items = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="">
        <Card className="col-4">
          <img className="w-50" src={item.img} alt="" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Items;
