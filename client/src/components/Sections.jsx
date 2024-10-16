import React from "react";
import TechPartnerSection from "./card1/Card1";
import WorkFastStoreMore from "./card2/Card2";
import EnhancedBattery from "./card3/Card3";
import MultiLanguageSupport from "./card4/Card4";

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

          <section className="relative w-full h-[700px]">
            <div className="bg-card4bg h-[600px] w-full  bg-cover bg-center  rounded-3xl border border-opacity-20 border-[#000000]"></div>
          </section>

          <section className="relative w-full h-[700px]">
            <div className="bg-card5bg  bg-no-repeat h-[800px]  bg-cover bg-center w-full rounded-3xl border border-opacity-20 border-[#000000]"></div>
            <MultiLanguageSupport />
          </section>
        </div>
      </div>

      <div>
        <div className="bg-card6bg bg-cover bg-center h-[800px]"></div>
      </div>
    </div>
  );
};

export default Sections;
