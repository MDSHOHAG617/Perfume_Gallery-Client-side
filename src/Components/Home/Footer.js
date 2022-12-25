import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div class=" px-4 py-5">
        <div class="row justify-items-center">
          <div class="col-lg text-start">
            <h1 className=" fs-2 text-primary">Perfume-Gallery</h1>
            <p className="fs-6 fw-light">
              {" "}
              You can shop with confidence at PerfumeGallery. We’ve partnered
              with PAYFAST to accept credit cards and electronic payments for
              our customers in a safe and secure manner.{" "}
            </p>
          </div>
          {/* <div class="col">Column</div> */}
          <div class="col-lg text-start">
            <h1 className=" fs-6 text-secondary fw-bold">Quick Links</h1>
            <p>Perfume Usage & Instructions</p>
            <p>Refund & Return Policy</p>
            <p>Terms & Notice</p>
            <p>Complaints / Compliments?</p>
            <p>Find a Gallery Near Me</p>
          </div>
          <div class="col-lg text-start">
            <h1 className=" fs-6 text-secondary fw-bold">Other Pages</h1>
            <p>Download Perfume Price List</p>
            <p>Business Opportunities</p>
            <p>Perfume Promotions</p>
            <p>Recommend a New Perfume</p>
          </div>
          <div class="col-lg text-start">
            <h1 className=" fs-6 text-secondary fw-bold">SITE TERMS/NOTICE</h1>
            <p className="  text-justify">
              All promotional offers mentioned on the ONLINE SHOP, is e-commerce
              exclusive. PerfumeGallery have no relation to other commercial
              perfume products and is created in it’s own unique packaging and
              trademarked brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
