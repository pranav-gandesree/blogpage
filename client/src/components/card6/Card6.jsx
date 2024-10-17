import React from "react";

const Card6 = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="lg:bg-card6lgbg bg-card6bg bg-cover bg-center lg:w-[1440px] lg:h-[800px]"></div>

      {/* Overlay Text */}
      <div className="absolute lg:top-[640px] lg:left-[352px] lg:w-[736px] lg:h-[58px] flex items-center justify-center">
        <h1 className="lg:text-desktop/h2 text-white font-medium font-markot">
          Trendy Design with Awesomeness
        </h1>
      </div>
    </div>
  );
};

export default Card6;
