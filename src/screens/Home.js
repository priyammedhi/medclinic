import React from 'react'
import Banner from '../components/Banner'
import WhyUs from '../components/WhyUs'
import Services from '../components/Services'
import Doctor from '../components/Doctors'
import Qna from '../components/Qna'
import MeetOurTeam from '../components/Meetourteam'
import Contactus from '../components/Contactus'

function Home() {
  return (
    <div>
      <Banner/>
      <WhyUs/>
      <Services/>
      <Doctor/>
      <Qna/>
      <MeetOurTeam/>
      <Contactus/>
    </div>
  )
}

export default Home
