import React from "react";

interface ProductCardProps {
  title: string;
  year: number;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, year, price, image }) => {
  return (
    <div
      className="flex bg-white rounded-lg p-2 w-full sm:w-[344px] h-auto sm:h-[111px]"
      style={{ boxShadow: "1.33px 1.33px 15.9px 0px #0000001F" }}
    >
      <img
        src={image}
        alt={title}
        className="w-[100px] sm:w-[120px] h-[80px] sm:h-[93px] rounded-lg object-cover"
      />

      <div className="ml-2 sm:ml-4 flex flex-col justify-between">
        <div>
          <h2
            className="font-normal text-base sm:text-lg"
            style={{
              fontFamily: "Gilroy-SemiBold, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#171616",
              textAlign: "left",
            }}
          >
            {title}
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{
              fontFamily: "Gilroy-SemiBold, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#888888",
              textAlign: "left",
              marginTop: "2px",
            }}
          >
            {year}
          </p>
        </div>
        <p
          className="text-sm sm:text-base mt-2 sm:mt-8"
          style={{
            fontFamily: "Gilroy-SemiBold, sans-serif",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#171616",
            textAlign: "left",
          }}
        >
          Price: <span style={{ color: "#000" }}>${price.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
