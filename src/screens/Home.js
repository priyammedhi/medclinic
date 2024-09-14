import React from 'react'
import Banner from '../components/Banner'
import WhyUs from '../components/WhyUs'
import Services from '../components/Services'
import Doctor from '../components/Doctors'
import Qna from '../components/Qna'

function Home() {
  return (
    <div>
      <Banner/>
      <WhyUs/>
      <Services/>
      <Doctor/>
      <Qna/>
    </div>
  )
}

export default Home
