import React from "react";
import banner from "../images/perfume.banner.webp";

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

// import React from "react";
// import banner from "../images/perfume.banner.webp";
// import banner2 from "../images/banner.2.webp";
// import banner3 from "../images/banner.3.webp";

// const Banner = () => {
//   return (
//     <row className="d-flex my-5 justify-items-center container align-items-center">
//       <div className="left-banner col-8">
//         <img className="img-fluid rounded" src={banner} alt="" />
//       </div>
//       <div className="left-banner d-grid col-4">
//         <img
//           className=" img-fluid roundedCircle rounded"
//           src={banner2}
//           alt=""
//         />
//         <img className="  img-fluid w-[200px] rounded" src={banner3} alt="" />
//       </div>
//     </row>
//   );
// };

// export default Banner;
