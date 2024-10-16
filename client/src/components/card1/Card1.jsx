import React from 'react';

export default function TechPartnerCard() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-opacity-20 border-gray-300 shadow-lg">
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Your Perfect<br />Tech Partner: A23S
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="text-center">
                <p className="font-semibold">12.7 cm (5-inch)</p>
                <p className="text-gray-600">Bright Display</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">3020 mAh</p>
                <p className="text-gray-600">Battery</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Smart Unlock</p>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-square mt-4">
            <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="A23S smartphone users"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}









// import React from 'react';

// const TechPartnerCard = () => {
//   return (
//     <div className="w-full mx-auto">
//       <div className="relative w-full h-[700px] rounded-3xl overflow-hidden bg-card1 bg-cover bg-center border border-opacity-20 border-[#000000]">

        
//         {/* Main content container */}
//         <div className="relative h-full flex items-center justify-between px-8">
//           <div className="relative w-3/5 h-full">
//           </div>

     
//           <div className="w-2/5 flex flex-col space-y-8 pl-16 relative top-36">
//             <h2 className="text-desktop/h2 ">
//               Your Perfect Tech Partner: A23S
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <p className="text-mobile/h3 font-medium">12.7 cm (5-inch)</p>
//                 <p className="text-desktop/body/1 text-gray-600">Bright Display</p>
//                 <div className="w-[289px] h-0.5 bg-black mt-1 md:mt-2"></div>
//               </div>

//               <div >
//                 <p className="text-mobile/h3 font-medium">3020 mAh</p>
//                 <p className="text-desktop/body/1 text-dark/card/bg">Battery</p>
//                 <div className="w-[289px] h-0.5 bg-black mt-1 md:mt-2"></div>
//               </div>

//               <div>
//                 <p className="text-mobile/h3 font-markot font-medium">Smart Unlock</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechPartnerCard;