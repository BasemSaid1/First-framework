import React from "react";
import style from "./about.module.css";

export default function About() {
  return (
    <>
      <div className={style.parentcolor}>
        <h1>ABOUT COMPONENT</h1>
        <div className={style.divs}>
          <div className={style.div1}></div>
          <i className="fa-solid fa-star"></i>
          <div className={style.div2}></div>
        </div>
        <div className={style.pp}>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
