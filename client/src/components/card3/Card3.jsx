import React from 'react';
import savemode from "../../assets/savemode.svg"
import sleepmode from "../../assets/sleepmode.svg"
import optimizer from "../../assets/optimizer.svg"
import brightness from "../../assets/brightness.svg"

const EnhancedBattery = () => {
  return (
    <section className="h-[521px] w-[456px] top-[110px] left-[720px] absolute">
      <div className="absolute inset-0 flex items-center">
        <div className="ml-auto mr-16 max-w-[600px] gap-8 flex flex-col">
          <div>
          <h2 className="text-desktop/h2 mb-2">Enhanced Battery with Smart Power Master</h2>
          <p className="text-desktop/h4 text-[#6F7384] mb-8">3020 mAh Battery</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <Feature icon={savemode} text="Smart Saving Mode" />
            <Feature icon={sleepmode} text="Sleep Mode" />
            <Feature icon={optimizer} text="APP Standby Optimizer" />
            <Feature icon={brightness} text="Auto-Adjustment of Screen Brightness" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-start w-[158px] h-[84px] flex-col gap-2">
    <div className=" flex items-center justify-center">
      <img src={`${icon}`} alt={text} className=" w-[49px] h-[49px]" />
    </div>
    <h6 className="text-desktop/h6/medium font-markot font-medium">{text}</h6>
  </div>
);

export default EnhancedBattery;