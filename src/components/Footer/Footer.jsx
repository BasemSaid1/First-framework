import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${style.footer} `}>
        <div className={style.content}>
          <div>
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h2>AROUND THE WEB</h2>
            <div>
              <i class="fa-brands fa-facebook me-2 fs-5 rounded-circle border text-center p-2"></i>
              <i class="fa-brands fa-twitter me-2 fs-5 rounded-circle border text-center p-2"></i>
              <i class="fa-brands fa-linkedin-in me-2 fs-5 rounded-circle border text-center p-2"></i>
              <i class="fa-solid fa-globe me-2 fs-5 rounded-circle border text-center p-2"></i>
            </div>
          </div>
          <div>
            <h2>ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className={style.Copyright}>
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
