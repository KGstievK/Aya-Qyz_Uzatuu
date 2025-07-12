"use client";

import { Oswald } from "next/font/google";
import scss from "./Timer.module.scss";

const oswald = Oswald({ subsets: ["latin"] });

const Timer: React.FC = () => {
  return (
    <section className={scss.Timer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1>Чакыруу!</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
              УРМАТТУУ КОНОКТОР! СИЗДЕРДИ СҮЙУКТҮҮ КЫЗЫБЫЗ А-ЯНЫН КЫЗ УЗАТУУ
              ТОЮНА АРНАЛГАН АК ДАСТОРКОНУБУЗДУН КАДЫРЛУУ КОНОГУ БОЛУУГА
              ЧАКЫРАБЫЗ
            </p>
            <p className={oswald.className}>Саат 13:00</p>
            <h1>Той ээси: Арген</h1>
          </div>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1>Приглашение!</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
              УВАЖАЕМЫЕ ГОСТИ! МЫ ПРИГЛАШАЕМ ВАС НА ТОРЖЕСТВЕННЫЙ БАНКЕТ, ПОСВЯЩЕННЫЙ ПРОВОДАМ НАШЕЙ ЛЮБИМОЙ ДОЧЕРИ А-Я
            </p>
            <p className={oswald.className}>В 13:00</p>
            {/* <p className={oswald.className}>
              Будем рады пригласить вас стать почётными гостями торжества,
              посвящённого бракосочетания
            </p> */}
            <h1>
              Хозяева торжества: <br /> Арген
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
