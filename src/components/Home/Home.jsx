import React from "react";
import style from "./home.module.css";
import image from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className={style.home}>
        <div className={style.image}>
          <img src={image} alt="img" />
        </div>
        <h1>START FRAMEWORK</h1>
        <div className={style.divs}>
          <div className={style.div1}></div>
          <i className="fa-solid fa-star"></i>
          <div className={style.div2}></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
