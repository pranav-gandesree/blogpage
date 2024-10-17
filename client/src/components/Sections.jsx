import React from 'react'
import TechPartnerCard from './card1/Card1'
import WorkFastStoreMore from './card2/Card2'
import EnhancedBattery from './card3/Card3'
import Card4 from './card4/Card4'
import MultiLanguageSupportSection from './card5/Card5'

const Sections = () => {
  return (
    <div className='lg:h-[3791px] lg:w-[1380px] w-[1280px] content m-10 rounded-3xl border border-black p-4 flex flex-col gap-4'>
      <TechPartnerCard/>
      <WorkFastStoreMore/>
      <EnhancedBattery/>
      <Card4/>
      <MultiLanguageSupportSection/>
    </div>
  )
}

export default Sections
