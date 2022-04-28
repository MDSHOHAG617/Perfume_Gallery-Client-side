import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Items from "./Items";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="row">
        <div className="col-12">
          {items.map((item) => (
            <Items key={item._id} item={item}></Items>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
