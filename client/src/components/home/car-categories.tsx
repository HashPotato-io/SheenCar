import React from "react";
import CarCategoriesBg from "../../assets/CarCategoriesBg.png";
import Cars from "../../assets/cars.png";
import CarTypeSlider from "./CarTypeSlider";

const CarCategories = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${CarCategoriesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "407px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <div
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontWeight: 400,
            fontSize: "46px",
            lineHeight: "100%",
            letterSpacing: "-1%",
            textAlign: "center",
            color: "#FFFFFF",
            position: "relative",
            zIndex: 20,
            marginTop: "100px",
          }}
        >
          The <span style={{ color: "#AF8C32" }}>Smarter</span> Way to Find Your
          Next Car
        </div>
        <img
          src={Cars}
          alt="Cars"
          style={{
            position: "absolute",
            bottom: "-50%",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 10,
          }}
        />
      </div>
      <CarTypeSlider />
    </>
  );
};

export default CarCategories;
