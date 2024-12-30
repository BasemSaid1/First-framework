import React, { useState } from "react";
import style from "./contact.module.css";

export default function Contact() {
  const [inputValues, setInputValues] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className={style.parentpage}>
        <h1 className="text-center">CONTACT SECTION</h1>
        <div className={style.divs}>
          <div className={style.div1}></div>
          <i className={`${style.ii} fa-solid fa-star`}></i>
          <div className={style.div2}></div>
        </div>
        <form>
          <div className={style.place}>
            <input
              id="userName"
              type="text"
              placeholder="userName"
              value={inputValues.userName}
              onChange={handleChange}
            />
            <label
              htmlFor="userName"
              className={inputValues.userName ? style.active : ""}
            >
              userName:
            </label>
          </div>
          <div className={style.place}>
            <input
              id="userAge"
              type="text"
              placeholder="userAge"
              value={inputValues.userAge}
              onChange={handleChange}
            />
            <label
              htmlFor="userAge"
              className={inputValues.userAge ? style.active : ""}
            >
              userAge:
            </label>
          </div>
          <div className={style.place}>
            <input
              id="userEmail"
              type="email"
              placeholder="userEmail"
              value={inputValues.userEmail}
              onChange={handleChange}
            />
            <label
              htmlFor="userEmail"
              className={inputValues.userEmail ? style.active : ""}
            >
              userEmail:
            </label>
          </div>
          <div className={style.place}>
            <input
              id="userPassword"
              type="password"
              placeholder="userPassword"
              value={inputValues.userPassword}
              onChange={handleChange}
            />
            <label
              htmlFor="userPassword"
              className={inputValues.userPassword ? style.active : ""}
            >
              userPassword:
            </label>
          </div>
          <div className="text-start">
            <button className={style.button}>Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}
