import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import GetInTouch from '../components/GetInTouch'
import SubjectsWeOffer from '../components/SubjectsWeOffer'
import Process from '../components/Process'

// import SliderCarousel from '../components/SliderCarousel'
const HomePage = () => {
  return (
    <div>
        <Banner />
        {/* <SliderCarousel /> */}
      <Services/>
      <SubjectsWeOffer/>
      <GetInTouch />
      <Process />
    


    </div>
  )
}

export default HomePage