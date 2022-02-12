import React from 'react';
import style from './index.module.css';
import { Acordeon } from '../../common/Acordeon';


export const Homesection8 = () => {
  return (
    <div className={style.contenedor_principal}>
        <div className={style.lineUp}></div>
        <h1>Resuelve tus dudas</h1>
        <Acordeon/>

    </div>
  )
}
