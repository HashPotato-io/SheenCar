import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="text-center flex flex-col justify-center items-center"
      style={{
        width: '349px',
        height: '329px',
        borderRadius: '12px',
        padding: '24px 17px',
        background: '#F5FFFC',
        boxShadow: '3px 3px 12px 0px #0000001F',
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="mb-2">
          {icon}
        </div>
      </div>
      <h3 
        className="mb-2"
        style={{
          fontFamily: "Gilroy-SemiBold",
          fontWeight: 400,
          fontSize: "26px",
          lineHeight: "100%",
          letterSpacing: "-1%",
          textAlign: "center",
          color: "#000000"
        }}
      >
        {title}
      </h3>
      <p 
        style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#404040"
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 