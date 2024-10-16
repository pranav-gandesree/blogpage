

// import React from 'react';

// const TechPartnerSection = () => {
//   return (
//     <div className="flex flex-col items-start justify-center h-full space-y-6 px-8 md:px-16 lg:px-20">
//       {/* Main Title */}
//       <h2 className="font-markot text-desktop/h2 font-medium">
//         Your Perfect Tech Partner: A23S
//       </h2>

//       {/* Display Specifications */}
//       <div className="space-y-4">
//         {/* Display Size */}
//         <div className="flex flex-col">
//           <p className="text-bodyLarge font-medium">12.7 cm (5-inch)</p>
//           <p className="text-bodySmall text-gray-600">Bright Display</p>
//           <div className="w-full h-0.5 bg-black mt-1 md:mt-2"></div>
//         </div>

//         {/* Battery */}
//         <div className="flex flex-col">
//           <p className="text-bodyLarge font-medium">3020 mAh</p>
//           <p className="text-bodySmall text-gray-600">Battery</p>
//  <div className="w-full h-0.5 bg-black mt-1 md:mt-2"></div> 
//         </div>

//         {/* Smart Unlock */}
//         <div className="flex flex-col">
//           <p className="text-bodyLarge font-medium">Smart Unlock</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechPartnerSection;





import React from 'react';

const TechPartnerCard = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative w-full h-[700px] rounded-3xl overflow-hidden bg-card1 bg-cover bg-center border border-opacity-20 border-[#000000]">

        
        {/* Main content container */}
        <div className="relative h-full flex items-center justify-between px-8">
          <div className="relative w-3/5 h-full">
          </div>

     
          <div className="w-2/5 flex flex-col space-y-8 pl-8 relative top-36">
            <h2 className="text-desktop/h2 ">
              Your Perfect Tech Partner: A23S
            </h2>

            <div className="space-y-6">
              <div>
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
      </div>
    </div>
  );
};

export default TechPartnerCard;