"use client"
import { SetStateAction } from "react"
import Dad from "./Dad/Dad"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import Map from "./Map/Map"
import NikhahSection from "./Nikhah/NikhahSection"
import Timer from "./Timer/Timer"
import Welcome from "./Welcome/Welcome"
import Time from "./Time/Time"

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
      <Time/>
      <Timer/>
      <Gps/>
      <Map/>
      <Dad/>
      <FormGuest/>
    </div>

  )
}

export default Home