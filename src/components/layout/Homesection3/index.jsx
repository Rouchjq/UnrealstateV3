import React from 'react';
import style from './index.module.css';

export const Homesection3 = () => {
  return (
    <div className={style.contenedor_principal}>
        <div className={style.lineUp}></div>
        <div className={style.titulos}>
            <h1>Ventajas al invertir en <br />propiedades listadas en unrealstate</h1>
        </div>

        <div className={style.contenido_contaier}>
           
            <div className={style.col1}>

                <div className={style.img_text}>
                    <h1>imagen</h1>
                    <p><span>entrada para todos los bolsillos</span><br />Empieza dede 100$, los NFT<br />son el futuro de las inverisones</p>
                </div>

                
                <div className={style.img_text}>
                    <h1>imagen3</h1>
                    <p><span>Genera ingresos pasivos</span><br />Damos la posibilidad de poder obtener<br />una rentabilidad de las inverisones<br />generadas en Unrealstate</p>
                </div>
                
            </div>

            <div className={style.col2}>

                <div className={style.img_text}>
                    <h1>imagen2</h1>
                    <p><span>Transacciones rápidas</span><br />la tecnología blockchain reduce<br />las transacciones a un sólo clic</p>
                </div>

                <div className={style.img_text}>
                    <h1>imagen4</h1>
                    <p><span>Transparencia total</span><br />Todas las acciones son visibles,<br />identificables y comprobables<br />en la blockchain</p>
                </div>

            </div>


        </div>

    </div>
  )
}
