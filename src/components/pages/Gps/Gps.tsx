"use client"
import { Montserrat, Playfair_Display } from 'next/font/google';
import scss from './Gps.module.scss'

const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: "400", // Укажите нужный вес (например, 400)
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Укажите нужный вес (например, 400)
});

const Gps = () => {
  return (
    <section className={scss.Gps}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.gps_modal}>
            <h1 className={playfairDisplay.className}>
              АДРЕС:
            </h1>
            <p className={montserrat.className}>
              г. Талас, Улица Ч.Айтматова, 246
            </p>
            <p className={montserrat.className}>
              Ресторан: <br /> <strong>АЛА-ТОО</strong>
            </p>
            <button><a href="https://2gis.kg/bishkek/geo/70000001093746474">ПОСМОТРИТЕ НА КАРТЕ</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gps