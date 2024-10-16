import React from 'react';
import gallery from "../../assets/gallery.svg"
import video from "../../assets/video.svg"
import episodes from "../../assets/episodes.svg"
import movies from "../../assets/movies.svg"

const WorkFastStoreMore = () => {
  return (
    <section className="relative">
      <div className="h-[600px] w-full"></div>
      <div className="absolute inset-0 flex items-center justify-end pt-32 ">
   
        <div className="bg-transparent rounded-3xl p-8 max-w-[500px]">
        <div className='flex flex-col gap-20'>
          <div>
              <h2 className="text-desktop/h2 font-markot font-medium ">Work Fast, Store More</h2>
              <p className="text-desktop/h4  font-markot font-medium mb-10 text-[#6F7384]">Ample 32GB ROM Storage</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6">

              <div className="flex flex-col w-[221px] h-[94px]">
                <img src={gallery} alt="Photos" className="w-12 h-12 mr-3" />
                <div>
                  <p className="text-mobile/h3 font-markot font-medium  h-[34px]">6,000 Photos</p>
                </div>
              </div>

              <div className="flex flex-col">
                <img src={video} alt="Short Videos" className="w-12 h-12 mr-3" />
                <div>
                  <p className="text-mobile/h3 font-markot font-medium w-[250px] h-[34px]">4,000 Short Videos</p>
                </div>
              </div>

              <div className="flex flex-col">
                <img src={episodes} alt="TV Episodes" className="w-12 h-12 mr-3" />
                <div>
                  <p className="text-mobile/h3 font-markot font-medium h-[34px]">150 TV Episodes</p>
                
                </div>
              </div>

              <div className="flex flex-col">
                <img src={movies} alt="Movies" className="w-12 h-12 mr-3" />
                <div>
                  <p className="text-mobile/h3 font-markot font-medium w-[184px] h-[34px]">50 Movies</p>
              
                </div>
              </div>
            </div>
          </div>
          </div>

          <p className="text-desktop/body/1 text-grey/grey/3 font-markot font-normal relative top-20 lef
          left-32">*Data may vary basis users' usage pattern</p>
        </div>
      </div>
    </section>
  );
};

export default WorkFastStoreMore;