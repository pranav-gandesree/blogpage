import React from 'react';

const EnhancedBattery = () => {
  return (
    <section className="">
      <div className="bg-card3bg bg-cover bg-center h-[600px] w-full"></div>
      <div className="absolute inset-0 flex items-center">
        <div className="ml-auto mr-16 max-w-[600px]">
          <h2 className="text-desktop/h2 mb-2">Enhanced Battery with Smart Power Master</h2>
          <p className="text-desktop/body/large mb-8">3020 mAh Battery</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <Feature icon="smart-saving" text="Smart Saving Mode" />
            <Feature icon="sleep" text="Sleep Mode" />
            <Feature icon="app-standby" text="APP Standby Optimizer" />
            <Feature icon="auto-adjust" text="Auto-Adjustment of Screen Brightness" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 mr-4 bg-blue-100 rounded-full flex items-center justify-center">
      <img src={`/path-to-icons/${icon}-icon.svg`} alt={text} className="w-6 h-6" />
    </div>
    <p className="text-desktop/body/2/medium">{text}</p>
  </div>
);

export default EnhancedBattery;