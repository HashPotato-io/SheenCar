import React from 'react';

interface CarDescriptionProps {
  description: string;
}

const CarDescription: React.FC<CarDescriptionProps> = ({ description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm m-6">
      <h3 className="text-xl font-bold mb-4">Description</h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CarDescription; 