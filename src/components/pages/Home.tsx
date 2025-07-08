"use client"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import NikhahSection from "./Nikhah/NikhahSection"
import Photo from "./Photo/Photo"
import SoTimes from "./SoTime/SoTimes"
import Timer from "./Timer/Timer"
import Timing from "./Timing/Timing"

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "flex-start",
      gap: '50px',
      position: "relative",
    }}>
      <NikhahSection/>
      <SoTimes/>
      <Timer/>
      <Gps/>
      <Timing/>
      <Photo/>
      <FormGuest/>
    </div>

  )
}

export default Home