import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import GetInTouch from '../components/GetInTouch'
import SubjectsWeOffer from '../components/SubjectsWeOffer'
import Process from '../components/Process'
const HomePage = () => {
  return (
    <div>
        <Banner />
      <Services/>
      <GetInTouch />
      <SubjectsWeOffer/>
      <Process />


    </div>
  )
}

export default HomePage