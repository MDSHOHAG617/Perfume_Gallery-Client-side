import React from "react";
import joinus from "../../images/joinusnxt.jpg";

const JoinUs = () => {
  return (
    <div
      className="position-relative "
      // style={{
      //   backgroundImage: `url("https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      // }}
      // className="container mt-5 img-responsive bg-image"
    >
      <div className=" position-absolute top-50 start-50 translate-middle">
        <div className="mt-5 text-white">
          <h1 className="fs-1">Contact Us</h1>
          <p className=" ">
            {" "}
            for you betterment and a bright future, we hire the best person,
            let's talk us join us there will be huge fun, make hire call us
          </p>
        </div>
        <button className="btn btn-primary mb-3">Make a phone call</button>
      </div>

      <img className="img-fluid " src={joinus} alt="" />
    </div>
  );
};

export default JoinUs;
