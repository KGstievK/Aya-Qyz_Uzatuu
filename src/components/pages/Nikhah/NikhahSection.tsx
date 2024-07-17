"use client"
import Image from 'next/image'
import scss from './NikhahSection.module.scss'
import floral1 from '@/assets/Vector.svg'
import back from '@/assets/back.jpg'
import { Oswald, } from "next/font/google";
import { FC, } from 'react';



const oswald = Oswald({ subsets: ["latin"] });

const NikhahSection: FC = () => {

  return (
    <section className={scss.NikhahSection}>
      <div className="container">
        <Image width={900} height={800} className={scss.back} src={back} alt='' />
          <h1>Wedding Day</h1>
        <div className={scss.content}>
          <div className={scss.name}>
            <div className={scss.we}>
              <Image className={scss.floral1} src={floral1} alt=''/>
              <div className={scss.date}>
                <h2 className={oswald.className}>ОКТЯБРЯ</h2>
                <div className={scss.day}>
                <h3 className={oswald.className}>5</h3>
                <p className={oswald.className}>2024</p>
                </div>
                <h2 className={oswald.className}>СУББОТА</h2>
              </div>
            </div>
          </div>
          <div className={scss.name}>
              <div className={scss.we}>
                <div className={scss.dateCopy}>
                  <h2 className={oswald.className}>ОКТЯБРЯ</h2>
                  <div className={scss.day}>
                  <h3 className={oswald.className}>5</h3>
                  <p className={oswald.className}>2024</p>
                  </div>
                  <h2 className={oswald.className}>СУББОТА</h2>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NikhahSection