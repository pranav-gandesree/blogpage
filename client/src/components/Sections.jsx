import React from "react";
import TechPartnerSection from "./card1/Card1";
import WorkFastStoreMore from "./card2/Card2";
import EnhancedBattery from "./card3/Card3";
import MultiLanguageSupport from "./card4/Card4";
import FeatureCards from "./card7/card7";

const Sections = () => {
  return (
    <div>
      <div class="h-[3791px] m-10 rounded-3xl border">
        <div className="flex flex-col gap-8 p-4">

{/* 
          <section className="relative w-full h-[700px] ">
            <div className="absolute inset-0 bg-card1 bg-cover bg-center lg:h-full lg:w-full rounded-3xl border border-opacity-20 border-[#000000] w-[328px] h-[444px]"></div>

            <div className="relative z-10 flex items-center justify-start w-[412px] h-[423px] ">
            <TechPartnerSection />
            </div>
            </section> */}

            <TechPartnerSection />




          <section className="relative w-full h-[700px]">
            <div className="absolute inset-0 bg-card2bg  bg-cover bg-center h-full w-full rounded-3xl border border-opacity-20 border-[#000000]">
              {" "}
            </div>
            <WorkFastStoreMore />
          </section>

          <section className="relative w-full h-[700px]">
            <div className="bg-card3bg h-[700px] w-full  bg-cover bg-center rounded-3xl border border-opacity-20 border-[#000000] "></div>
            <EnhancedBattery />
          </section>



          {/* <section className="relative w-full h-[700px]">
            <div className="bg-card4bg h-[600px] w-full  bg-cover bg-center  rounded-3xl border border-opacity-20 border-[#000000]"></div>

          </section> */}

<section className="relative w-full h-[700px]">
  <div className="bg-card4bg h-[600px] w-full bg-cover bg-center rounded-3xl border border-opacity-20 border-[#000000]"></div>

  {/* Text Overlay */}
  <div className="absolute top-[55px] left-[55px] w-[416px] h-[129px] flex gap-4 flex-col ">
    <h2 className="text-[#232323] text-desktop/h3 font-markot  font-medium  mb-2">Special OS Features</h2>
    <h6 className="text-desktop/body/large font-normal font-markot w-[360px] h-[64px] text-[#6F7384]">Enhanced WhatsApp features like peek mode, call recording, and more!</h6>
  </div>
</section>





          {/* <section className="relative w-full h-[700px]">
            <div className="bg-card5bg  bg-no-repeat h-[800px]  bg-cover bg-center w-full rounded-3xl border border-opacity-20 border-[#000000]"></div>
            <MultiLanguageSupport />
          </section> */}



<section className="relative w-full h-[700px] flex items-center justify-between">
  {/* Background Image */}
  <div className="bg-card5bg bg-no-repeat h-[800px] bg-cover bg-center w-full rounded-3xl border border-opacity-20 border-[#000000]"></div>

  {/* Multi-Language Support Text */}
  <div className="absolute right-0 top-[10px] flex items-center justify-end pr-10">
    <MultiLanguageSupport />
  </div>
</section>

        </div>
      </div>




      <div>

              <div className="relative w-full h-[800px]">
                {/* Background Image */}
                <div className="bg-card6bg bg-cover bg-center w-full h-full"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-10 left-[300px]  w-[736px] text-center p-4">
                  <p className="text-desktop/h2 font-medium text-white font-markot">
                  Trendy Design with Awesomeness
                  </p>
                </div>
              </div>

            <FeatureCards/>
      </div>


    </div>
  );
};

export default Sections;
