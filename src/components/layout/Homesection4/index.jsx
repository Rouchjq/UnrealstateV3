import React from "react";
import style from "./index.module.css";

export const Homesection4 = () => {
  return (
    <div className={style.back}>
      <div className={style.contenedor_principal}>
        <div className={style.lineUp}></div>
        <h1>Una plataforma que lo hace todo por ti</h1>
        <p>
          Desde el momento en que se lista una propiedad hasta el cierre del
          trato
          <br />
          Unrealstate gestiona las transacciones de inmuebles todo en un sólo
          luga
        </p>
        <button className={style.btn_grande}>Empezar</button>
      </div>
    </div>
  );
};
