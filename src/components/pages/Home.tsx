"use client"
import Dad from "./Dad/Dad"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import Map from "./Map/Map"
import NikhahSection from "./Nikhah/NikhahSection"
import SoTime from "./SoTime/SoTime"
import Timer from "./Timer/Timer"

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
      <SoTime/>
      <Timer/>
      <Gps/>
      <Map/>
      <Dad/>
      <FormGuest/>
    </div>

  )
}

export default Home