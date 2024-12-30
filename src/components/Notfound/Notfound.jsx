import React from "react";
import style from "./notfound.module.css";

export default function Notfound() {
  return (
    <>
      <div className={style.error}>
        <h1>Not Found</h1>
        <h2>This page doesn’t exist.</h2>
        <h2>If this is a mistake, let us know, and we will try to fix it!</h2>
      </div>
    </>
  );
}
