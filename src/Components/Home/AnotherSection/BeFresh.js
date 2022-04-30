import React from "react";

const BeFresh = () => {
  return (
    <div
      className="d-lg-flex my-5 
    align-items-center  container"
    >
      <p className=" p-4 card me-5">
        <h4>Wanna smell fresh all day? </h4>
        Good fragrance can instantly lift your mood. And that’s the reason why
        we constantly struggle to make our perfume last all day. Whether it’s
        spending hordes on expensive ones or re-applying them every few hours,
        we have tried it all. But maybe we are just doing it wrong? Turns out,
        the right spots to apply perfumes on our body are the ones we would have
        never thought of.
      </p>
      <img
        className="rounded img-fluid"
        src={
          "https://images.summitmedia-digital.com/fhm/images/2016/12/06/spray-12-6.gif"
        }
        alt=""
      />
    </div>
  );
};

export default BeFresh;
