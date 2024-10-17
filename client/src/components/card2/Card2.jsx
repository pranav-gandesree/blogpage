// import React from 'react';
// import gallery from "../../assets/gallery.svg"
// import video from "../../assets/video.svg"
// import episodes from "../../assets/episodes.svg"
// import movies from "../../assets/movies.svg"


// const WorkFastStoreMore = () => {
//   return (
//     <section className="relative">
//     <div className="lg:h-[739px] lg:w-[1248px]"></div>
//     <div className='absolute inset-0 bg-card2bg lg:bg-card2lgbg bg-cover bg-center lg:h-[739px] h-[300%]rounded-3xl border border-opacity-20 border-[#000000]'>

//               {" "}
//             </div>
//     <div className="absolute inset-0 flex items-center justify-end pt-32 ">
 
//       <div className="bg-transparent rounded-3xl p-8 max-w-[500px]">
//       <div className='flex flex-col gap-20'>
//         <div>
//             <h2 className="text-desktop/h2 font-markot font-medium ">Work Fast, Store More</h2>
//             <p className="text-desktop/h4  font-markot font-medium mb-10 text-[#6F7384]">Ample 32GB ROM Storage</p>
//         </div>
//         <div>
//           <div className="grid grid-cols-2 gap-6">

//             <div className="flex flex-col w-[221px] h-[94px]">
//               <img src={gallery} alt="Photos" className="w-12 h-12 mr-3" />
//               <div>
//                 <p className="text-mobile/h3 font-markot font-medium  h-[34px]">6,000 Photos</p>
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <img src={video} alt="Short Videos" className="w-12 h-12 mr-3" />
//               <div>
//                 <p className="text-mobile/h3 font-markot font-medium w-[250px] h-[34px]">4,000 Short Videos</p>
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <img src={episodes} alt="TV Episodes" className="w-12 h-12 mr-3" />
//               <div>
//                 <p className="text-mobile/h3 font-markot font-medium h-[34px]">150 TV Episodes</p>
              
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <img src={movies} alt="Movies" className="w-12 h-12 mr-3" />
//               <div>
//                 <p className="text-mobile/h3 font-markot font-medium w-[184px] h-[34px]">50 Movies</p>
            
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>

//         <p className="text-desktop/body/1 text-grey/grey/3 font-markot font-normal relative top-20 lef
//         left-32">*Data may vary basis users' usage pattern</p>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default WorkFastStoreMore;











import React from 'react';
import gallery from "../../assets/gallery.svg";
import video from "../../assets/video.svg";
import episodes from "../../assets/episodes.svg";
import movies from "../../assets/movies.svg";

const WorkFastStoreMore = () => {
  return ( 

  <section className="relative lg:h-[739px] h-[2000px]">
  <div className="absolute inset-0 bg-card2bg lg:bg-card2lgbg bg-cover bg-center h-[2000px] lg:h-[739px] w-full rounded-3xl border border-opacity-20 border-[#000000]"></div>

  <div className="lg:absolute relative inset-0 flex items-center justify-end pt-32 ">
    <div className="bg-transparent rounded-3xl p-8 lg:max-w-[1200px]">
      <div className="flex flex-col gap-20">
        <div>
          <h2 className="text-desktop/h2 font-markot font-medium">Work Fast, Store More</h2>
          <p className="text-desktop/h4 font-markot font-medium mb-10 text-[#6F7384]">Ample 32GB ROM Storage</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Image and text grid */}
          {[ 
            { img: gallery, label: "6,000 Photos", alt: "Photos" },
            { img: video, label: "4,000 Short Videos", alt: "Short Videos" },
            { img: episodes, label: "150 TV Episodes", alt: "TV Episodes" },
            { img: movies, label: "50 Movies", alt: "Movies" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col w-[221px] h-[94px]">
              {item.img ? (
                <img src={item.img} alt={item.alt} className="w-12 h-12 mr-3" />
              ) : (
                <div className="w-12 h-12 mr-3 bg-gray-200">Image not available</div>
              )}
              <div>
                <p className="text-mobile/h3 font-markot font-medium h-auto">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-desktop/body/1 text-grey/grey/3 font-markot font-normal relative top-20 left-32">
        *Data may vary basis users' usage pattern
      </p>
    </div>
  </div>
</section>
  )
};

export default WorkFastStoreMore;
