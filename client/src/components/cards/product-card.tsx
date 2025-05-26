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
      className="flex bg-white rounded-lg p-2 w-[344px] h-[111px]"
      style={{ boxShadow: "1.33px 1.33px 15.9px 0px #0000001F" }}
    >
    
        <img
          src={image}
          alt={title}
          className="w-[120px] h-[93px] rounded-md object-cover"
        />

      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h2
            className="font-normal"
            style={{
              fontFamily: "Gilroy-SemiBold, sans-serif",
              fontWeight: 400,
              fontSize: "18.55px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#171616",
              textAlign: "left",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "Gilroy-SemiBold, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
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
          style={{
            fontFamily: "Gilroy-SemiBold, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#171616",
            textAlign: "left",
            marginTop: "8px",
          }}
        >
          Price: <span style={{ color: "#000" }}>${price.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
