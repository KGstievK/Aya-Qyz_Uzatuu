"use client";

import { useState, useEffect } from "react";
import { Oswald, } from "next/font/google";
import scss from "./Timer.module.scss";

const oswald = Oswald({ subsets: ["latin"] });
const playfair_display = ({ subsets: ["latin"] });


const Timer: React.FC = () => {

  return (
    <section className={scss.Timer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1>Кымбаттуу туугандар жана достор</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
            Кутман менен Айжан үйлөнүү тоюна арналган салтанаттуу кечеде ак дастарконкбуздун кадырлуу коногу болуп, батаңыздарды берип кетүүгө чакырабыз!
            </p >
            <h1>
            Той ээлери Юруслан, Жазгуль
            </h1>
          </div>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1>Дорогие родные и друзья</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
              Совсем скоро, в жизни двух любящих людей произойдет одно из самых важных событий, свидетелями которого мы просим вас быть и разделить радость этого дня вместе с нами.
            </p >
            <p className={oswald.className}>
              Будем рады пригласить вас стать почётными гостями торжества, посвящённого бракосочетания
            </p >
            <h1>
            Той ээлери Юруслан, Жазгуль
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
