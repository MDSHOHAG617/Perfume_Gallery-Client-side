import React, { useEffect, useState } from "react";
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
          <div className="col-sm  d-flex justify-content-center p-4">
            {items.map((item) => (
              <Items key={item._id} item={item}></Items>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
