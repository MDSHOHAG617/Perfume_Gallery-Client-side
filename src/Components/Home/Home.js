import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeFresh from "./AnotherSection/BeFresh";
import JoinUs from "./AnotherSection/JoinUs";
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
      <BeFresh></BeFresh>

      <div className="container  ">
        <h1 className="mt-5">Products</h1>
      </div>
      <div className="container">
        <div className="row ">
          <div className=" w-50 mx-auto justify-content-center ">
            {items.map((item) => (
              <Items key={item._id} item={item}></Items>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-light p-5">
        <Link
          to="/manageInventory"
          className="btn btn-warning text-black fs-5 my-1"
        >
          Manage Inventories
        </Link>
      </div>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
