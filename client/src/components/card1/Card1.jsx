

import React from 'react';

const TechPartnerSection = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full space-y-6 px-8 md:px-16 lg:px-20">
      {/* Main Title */}
      <h2 className="font-markot text-desktop/h2 font-medium">
        Your Perfect Tech Partner: A23S
      </h2>

      {/* Display Specifications */}
      <div className="space-y-4">
        {/* Display Size */}
        <div className="flex flex-col">
          <p className="text-bodyLarge font-medium">12.7 cm (5-inch)</p>
          <p className="text-bodySmall text-gray-600">Bright Display</p>
        </div>

        {/* Battery */}
        <div className="flex flex-col">
          <p className="text-bodyLarge font-medium">3020 mAh</p>
          <p className="text-bodySmall text-gray-600">Battery</p>
        </div>

        {/* Smart Unlock */}
        <div className="flex flex-col">
          <p className="text-bodyLarge font-medium">Smart Unlock</p>
        </div>
      </div>
    </div>
  );
};

export default TechPartnerSection;







