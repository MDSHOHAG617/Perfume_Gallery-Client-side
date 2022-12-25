import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllItems from "./AllItems";

const ManageInventories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://perfumegallery.onrender.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="container  ">
        <h1 className="">All Products</h1>
      </div>
      <div className="">
        <div className=" row mx-2">
          {items.map((item) => (
            <div key={item.id} id="cardItem" className="col-lg-4 col-md-6 ">
              <AllItems item={item} />
            </div>
            // <AllItems key={item._id} item={item}></AllItems>
          ))}
        </div>
        <Link className="btn btn-success btn-lg my-3 w-25" to="/addItems">
          Add new item
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
