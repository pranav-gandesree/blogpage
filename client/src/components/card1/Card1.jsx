// import img1 from "../../assets/Background/card1.webp";
// import img2 from "../../assets/Background/Card 1 Mobile.webp";
// import React from 'react';

// const TechPartnerCard = () => {
//   return (
//     <div 
//       className="relative bg-[#EFF1F4] w-full h-auto lg:w-[1248px] lg:h-[739px] rounded-[56px] border border-black/20 border-r-0 border-b-0 opacity-100 p-4 mx-auto overflow-hidden"
//     >
//       {/* Background Image for Web */}
//       <div className="absolute inset-0 hidden lg:block">
//         <img
//           src={img1}
//           alt="A23S Phone"
//           className="object-cover w-full h-full lg:w-[1248px] lg:h-[739px]"
//         />
//       </div>

//       {/* Background Image for Mobile */}
//       <div className="absolute inset-0 block lg:hidden">
//         <img
//           src={img2}
//           alt="A23S Phone"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col gap-9 lg:top-[295px] lg:left-[836px] h-[131px] lg:h-[423px] w-[304px] lg:w-[412px]">
//         <h2 className="lg:text-desktop/h2 text-lg font-medium font-markot text-[#232323] mb-2">Your Perfect Tech Partner: A23S</h2>

//         {/* Features */}
//         <div className="flex flex-col justify-between mb-4 lg:h-[234px] lg:w-[294px] w-[1279px] h-[148px]">
//           <div className="flex gap-2 flex-col">
//             <p className="text-mobile/h3 font-medium">12.7 cm (5-inch)</p>
//             <p className="text-desktop/body/1 text-gray-600">Bright Display</p>
//             <div className="w-[289px] h-0.5 bg-black mt-1 md:mt-2"></div>
//           </div>

//           <div>
//             <p className="text-mobile/h3 font-medium">3020 mAh</p>
//             <p className="text-desktop/body/1 text-dark/card/bg">Battery</p>
//             <div className="w-[289px] h-0.5 bg-black mt-1 md:mt-2"></div>
//           </div>

//           <div>
//             <p className="text-mobile/h3 font-markot font-medium">Smart Unlock</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechPartnerCard;










import img1 from "../../assets/Background/card1.webp";
import img2 from "../../assets/Background/Card 1 Mobile.webp"
import React from 'react';

const TechPartnerCard = () => {
  return (
    <div 
      className="
        relative 
        bg-[#EFF1F4] 
       w-[1201px] h-[1744px]
        lg:w-[1248px] lg:h-[739px] 
        rounded-[56px] 
        border border-black/20 border-r-0 border-b-0 
        opacity-100 p-4 mx-auto overflow-hidden"
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <img
          src={img1}
          alt="A23S Phone"
          className="object-cover w-[1201px] h-[1744px] 
        lg:w-[1248px] lg:h-[739px] "
        />
      </div> */}


<div className="absolute inset-0 hidden lg:block">
        <img
          src={img1}
          alt="A23S Phone"
          className="object-cover w-full h-full lg:w-[1248px] lg:h-[739px]"
        />
      </div>

      {/* Background Image for Mobile */}
      <div className="absolute inset-0 block lg:hidden">
        <img
          src={img2}
          alt="A23S Phone"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-9 lg:top-[295px] lg:left-[836px] h-[131px] lg:h-[423px] w-[304px] lg:w-[412px]">
        <h2 className="lg:text-desktop/h2 text-lg font-medium font-markot text-[#232323] mb-2">Your Perfect Tech Partner: A23S</h2>

        {/* Features */}
        <div className="flex flex-col justify-between mb-4 lg:h-[234px] lg:w-[294px] w-[1279px] h-[148px]">
              <div className="flex gap-2 flex-col">
                <p className="text-mobile/h3 font-medium">12.7 cm (5-inch)</p>
                <p className="text-desktop/body/1 text-gray-600">Bright Display</p>
                <div className="w-[289px] h-0.5 bg-black mt-1 md:mt-2"></div>
              </div>

              <div >
                <p className="text-mobile/h3 font-medium">3020 mAh</p>
                <p className="text-desktop/body/1 text-dark/card/bg">Battery</p>
                <div className="w-[289px] h-0.5 bg-black mt-1 md:mt-2"></div>
              </div>

              <div>
                <p className="text-mobile/h3 font-markot font-medium">Smart Unlock</p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default TechPartnerCard;










