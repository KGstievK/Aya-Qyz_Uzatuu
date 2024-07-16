"use client"
import { useEffect, useState } from 'react';
import scss from './SoTime.module.scss'
import { Oswald, Playfair_Display } from 'next/font/google';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


const oswald = Oswald({ subsets: ["latin"] });
const playfair_display = Playfair_Display({ subsets: ["latin"] });

const SoTimes = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2024-10-05T17:00:00"); 

  const updateTimer = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className={scss.SoTime}>
      <div className="container">
        <div className={scss.content}>
        <div className={scss.ourDay}>
            <div className={scss.time}>
              <h2 className={oswald.className}>
                {timeLeft.days}{" "}
                <span className={playfair_display.className}>КҮН</span>
              </h2>
              <h2 className={oswald.className}>
                {timeLeft.hours}{" "}
                <span className={playfair_display.className}>СААТ</span>
              </h2>
              <h2 className={oswald.className}>
                {timeLeft.minutes}{" "}
                <span className={playfair_display.className}>МИНУТА</span>
              </h2>
              <h2 className={oswald.className}>
                {timeLeft.seconds}{" "}
                <span className={playfair_display.className}>СЕКУНДА</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoTimes