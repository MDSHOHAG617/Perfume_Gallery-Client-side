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
    fetch("https://perfumegallery.onrender.com/items")
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
      <div className="row mx-2">
        {items.map((item) => (
          // <Items className="col-lg-3" key={item._id} item={item}></Items>
          <div key={item.id} id="cardItem" className="col-lg-4 col-md-6 ">
            <Items item={item} />
          </div>
        ))}
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
