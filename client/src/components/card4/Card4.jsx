
const Card4 = () => {
  return (
    <section className="relative w-full h-1200px lg:h-[730px]"> 
    <div className="lg:bg-card4lgbg bg-card4bg h-[1200px] lg:h-[729px] m w-full bg-cover bg-center rounded-3xl border border-opacity-20 border-[#000000]"></div>
    
    <div className="absolute lg:top-[55px] top-[50px] lg:left-[55px] left-[155px] w-[1000px] h-auto flex gap-4 flex-col ">
      <h2 className="text-[#232323] lg:text-desktop/h3 text-[111px] leading-[48px] font-markot  font-medium  mb-2">
        Special OS Features
      </h2>
      <h6 className="lg:text-desktop/body/large font-normal w-[1160] leading-[60px] text-[48px] font-markot lg:w-[360px] h-auto text-[#6F7384]">
        Enhanced WhatsApp features like peek mode, call recording, and more!
      </h6>
    </div>
  </section>
  
  )
}

export default Card4
