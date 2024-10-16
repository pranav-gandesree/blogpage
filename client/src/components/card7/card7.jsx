// import React from 'react';

// const FeatureCards = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto p-6">
//       <div className="grid grid-cols-2 gap-8">
//         {/* Left Column - Face Unlock Card */}
//         <div className="bg-custom-gradient rounded-3xl p-8 shadow-lg h-[600px]">
//           <h2 className="text-2xl font-semibold mb-8">
//             Effortless Security: 
//             <br />
//             Smart Face Unlock
//           </h2>
//           <div className="relative3xl border border-black p-6 flex justify-center h-[calc(100%-100px)]">
//             <img 
//               src="/api/placeholder/280/500" 
//               alt="Phone with face unlock interface"
//               className="w-64 object-contain"
//             />
//           </div>
//         </div>

//         {/* Right Column - Stacked Cards */}
//         <div className="grid grid-rows-2 gap-8">
//           {/* Battery Card */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg">
//             <h2 className="text-2xl font-semibold mb-6">
//               Enjoy Efficient Battery Use All Day
//             </h2>
//             <div className="relative bg-gradient-to-r from-sky-50 to-sky-100 rounded-3xl p-6">
//               <div className="flex flex-col items-center justify-center">
//                 <div className="text-[80px] font-bold text-sky-500 leading-none">
//                   3020
//                 </div>
//                 <div className="text-xl text-sky-600 mt-2">mAh Battery</div>
//                 <div className="text-sm text-sky-400 mt-4">
//                   Enabled with Smart Power Master
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RAM Card */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg">
//             <h2 className="text-2xl font-semibold mb-6">
//               4GB* (2GB+2GB*) RAM :
//               <br />
//               Enhanced Productivity
//             </h2>
//             <div className="relative bg-gradient-to-b from-sky-100 to-white rounded-3xl p-6">
//               <div className="flex flex-col items-center">
//                 <img 
//                   src="/api/placeholder/400/140" 
//                   alt="Phone showing RAM capacity"
//                   className="w-full object-contain mb-4"
//                 />
//                 <p className="text-xs text-gray-500">*Memory Fusion Technology</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;






























import cardleft from "../../assets/card7/card7bg.png";


export default function FeatureCards() {
  return (
    <div className=" flex items-center justify-center gap-6">


        <div className="grid md:grid-cols-2 gap-6 p-6">

          <div className="rounded-lg bg-custom-gradient border border-black p-6 flex flex-col justify-center w-[518px] h-[784px]">
            <h3 className="text-desktop/h3 font-medium font-markot mb-4 w-[428px] h-[102px] top-[40px] left-[40px]">Effortless Security: Smart Face Unlock</h3>
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
              <img
                src={cardleft}
                alt="Smartphone with face unlock"
                className="absolute inset-0 w-[318px]] h-[552px] object-cover"
              />
            </div>
          </div>


          <div className="space-y-6 h-[784px] flex gap-6 flex-col">
            <div className="bg-sky-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Enjoy Efficient Battery Use All Day</h2>
              <div className="relative">
                <div className="text-8xl font-bold text-sky-500 leading-none">3020</div>
                <div className="text-2xl font-semibold text-sky-700 absolute bottom-0 right-0">mAh Battery</div>
              </div>
              <p className="text-sm text-sky-700 mt-2">Enabled with Smart Power Master</p>
            </div>
            <div className="bg-sky-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">4GB* (2GB+2GB*) RAM : Enhanced Productivity</h2>
              <div className="relative aspect-video bg-sky-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=180&width=320"
                  alt="Smartphones showcasing RAM"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-sky-700 mt-2">*Memory Fusion Technology</p>
            </div>
          </div>
        </div>
    
    </div>
  )
}