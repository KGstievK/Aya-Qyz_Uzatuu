"use client";
import Image from "next/image";
import scss from "./Welcome.module.scss";
import folor from "@/assets/Vector.svg";
import { FC, useEffect, useState } from "react";


const Welcome: FC= () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 3000);
  }, []);

  return (
    <section className={scss.Welcome} style={{
      display: !animation ? "flex" : "none"
    }} >
      <div className="container">
        <div className={scss.content}>
          <div className={scss.We}>
            <div className={scss.We_name}>
             
            </div>
          </div>
          <h1>ЧАКЫРУУ</h1>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
