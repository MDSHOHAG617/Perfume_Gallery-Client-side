import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageInventories from "../Inventory/ManageInventories";
import Banner from "./Banner";
import Footer from "./Footer";
import Items from "./Items";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="container  ">
        <h1 className="my-5">Products</h1>
      </div>
      <div className="">
        <div className="row">
          <div className=" w-50 mx-auto justify-content-center ">
            {items.map((item) => (
              <Items key={item._id} item={item}></Items>
            ))}
          </div>
        </div>
      </div>
      <Link
        to="/manageInventory"
        className="btn btn-warning text-black fs-5 my-1"
      >
        Manage Inventories
      </Link>

      <Footer></Footer>
    </div>
  );
};

export default Home;
