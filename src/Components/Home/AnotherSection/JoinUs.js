import React from "react";
import img from "../../images/joinus.jpg";

const JoinUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
      className="container mt-5 "
    >
      <div className="">
        <p className="mt-5 ">
          <h3>Contact Us</h3>
          for you betterment and a bright future, we hire the best person, let's
          talk us join us there will be huge fun, make hire call us
        </p>
        <button className="btn btn-secondary mb-3">Make a phone call</button>
      </div>

      <img className="img-fluid w-75" src={img} alt="" />
    </div>
  );
};

export default JoinUs;
