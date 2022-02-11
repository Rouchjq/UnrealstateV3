import React from 'react';
import style from './index.module.css';
import { Header } from '../../common/Header';
import img1 from '../../../assets/images/homesection1/img1.png';
import img2 from '../../../assets/images/homesection1/img2.jpg';

export const Homesection1 = () => {
  return (
    <div className={style.contenedor_principal}>
        <Header />

        <div className={style.titulos}>
            <h1>Las transacciones inombiliarias</h1>
            <h1>mas Rapidas,faciles y seguras que nunca</h1>
        </div>

        <div className={style.text}>
            <p>Compra,vende e invierte en propiedades. Genera ingresos a través<br />de la plataforma descentralizada basad en blockchain</p>
        </div>

        <div className={style.imgs_container}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>

    </div>
  )
}
