import React from "react";
import style from "./index.module.css";
import img1 from "../../../assets/images/homesection1/img1.png";
import img3 from "../../../assets/images/homesection1/img3.jpg";

export const Homesection1 = () => {
  return (
    <section className={style.contenedor_principal}>
      <div className={style.titulos}>
        <h1>Las transacciones inombiliarias</h1>
        <h1>más rápidas,fáciles y seguras que nunca</h1>
      </div>

      <div className={style.text}>
        <p>
          Compra,vende e invierte en propiedades. <br />
          Genera ingresos a través de la plataforma descentralizada basad en
          blockchain
        </p>
      </div>
      <button className={style.btn_mobile}>Empezar</button>

      <div className={style.imgs_container}>
        <img src={img1} alt="house" />
        <img src={img3} alt="house" />
      </div>
    </section>
  );
};
