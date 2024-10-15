import React from 'react';

const WorkFastStoreMore = () => {
  return (
    <section className="relative">
      <div className="h-[600px] w-full"></div>
      <div className="absolute inset-0 flex items-center justify-end pr-16">
        <div className="bg-transparent rounded-3xl p-8 max-w-[500px]">
          <h2 className="text-desktop/h3 mb-4">Work Fast, Store More</h2>
          <p className="text-desktop/body/1 mb-6">Ample 32GB ROM Storage</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <img src="/path-to-photo-icon.svg" alt="Photos" className="w-6 h-6 mr-3" />
              <div>
                <p className="text-desktop/h4">6,000</p>
                <p className="text-desktop/body/2/regular">Photos</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/path-to-video-icon.svg" alt="Short Videos" className="w-6 h-6 mr-3" />
              <div>
                <p className="text-desktop/h4">4,000</p>
                <p className="text-desktop/body/2/regular">Short Videos</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/path-to-tv-icon.svg" alt="TV Episodes" className="w-6 h-6 mr-3" />
              <div>
                <p className="text-desktop/h4">150</p>
                <p className="text-desktop/body/2/regular">TV Episodes</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/path-to-movie-icon.svg" alt="Movies" className="w-6 h-6 mr-3" />
              <div>
                <p className="text-desktop/h4">50</p>
                <p className="text-desktop/body/2/regular">Movies</p>
              </div>
            </div>
          </div>
          <p className="text-desktop/caption text-grey/grey/3 mt-4">*Data may vary basis users' usage pattern</p>
        </div>
      </div>
    </section>
  );
};

export default WorkFastStoreMore;