import React from "react";
import banner from "../images/banner.4.webp";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
