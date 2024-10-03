import React from "react";
import Type from "./Type";

const TypeData = () => {
  return (
    <>
      <div className="row mx-5 my-5">
        <h1 className="Buzz-title text-center fw-bold mb-4" style={{ color: "#844685" }}>Blogger Buzz</h1>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="public/img/Sports.jpg" Name="Sports" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="public/img/Music.jpeg" Name="Music" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="public/img/Business.jpg" Name="Business" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="public/img/Fashion and beauty.jpg" Name="Fashion and beauty" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="public/img/Travel.jpg" Name="Travel" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="public/img/Art and design.jpg" Name="Art and design" />
        </div>
      </div>
    </>
  );
};

export default TypeData;

