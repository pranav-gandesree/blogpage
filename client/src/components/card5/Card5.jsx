import React from 'react';

const MultiLanguageSupportSection = () => {
  return (
    <section className="relative w-full h-auto flex items-center justify-between">
      {/* Background image container */}
      <div className="
        lg:bg-card5lgbg bg-card5bg bg-no-repeat bg-cover bg-center rounded-3xl border border-opacity-20 border-[#000000]
        w-full h-[1600px]      
        lg:h-[700px]      
       
      "></div>

      {/* Multi-Language Support content */}
      <div className="absolute lg:right-0 right-[26px] lg:top-[10px]  top-[111px] flex items-center justify-end pr-4 md:pr-10">
        <section className="lg:w-[300px] w-[1200px] ">
          <div className="flex justify-center items-center">
            <div className="text-left relative">
              <h2 className="lg:text-desktop/h2  text-[90px]  lg:mb-4 mb-8">Multi-Language Support</h2>
              <p className="lg:text-desktop/body/1 text-[50px]  lg:mb-4 mb-16">
                Use your device in any language you prefer
              </p>
              <p className="lg:text-desktop/body/2/regular leading-[60px] text-[36px] text-grey/grey/4">
                15 Languages Supported: English, Hindi, Gujarati, Tamil, Telugu,
                Punjabi, Assamese, Bengali, Kannada, Malayalam, Kashmiri, Urdu,
                Nepali, Marathi, Oriya.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MultiLanguageSupportSection;



