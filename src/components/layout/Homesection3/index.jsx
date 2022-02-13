import React from 'react';
import style from './index.module.css';
import img1 from '../../../assets/images/homesection3/img1.png';
import img2 from '../../../assets/images/homesection3/img2.png';
import img3 from '../../../assets/images/homesection3/img3.png';
import img4 from '../../../assets/images/homesection3/img4.png';

export const Homesection3 = () => {
  return (
    <section className={style.contenedor_principal}>
      <div className={style.lineUp}></div>
      <div className={style.titulos}>
        <h1>
          Ventajas al invertir en <br />
          propiedades listadas en unrealstate
        </h1>
      </div>

      <div className={style.contenido_container}>
        <div className={style.col1}>
          <div className={style.img_text}>
            <img src={img1} alt="img" />
            <p>
              <span>Entrada para todos los bolsillos</span>
              <br />
              Empieza dede 100$, los NFT
              <br />
              son el futuro de las inverisones
            </p>
          </div>

          <div className={style.img_text}>
            <img src={img3} alt="img" />
            <p>
              <span>Genera ingresos pasivos</span>
              <br />
              Damos la posibilidad de poder obtener
              <br />
              una rentabilidad de las inverisones
              <br />
              generadas en Unrealstate
            </p>
          </div>
        </div>

        <div className={style.col2}>
          <div className={style.img_text}>
            <img src={img2} alt="img" />
            <p>
              <span>Transacciones rápidas</span>
              <br />
              la tecnología blockchain reduce
              <br />
              las transacciones a un sólo clic
            </p>
          </div>

          <div className={style.img_text}>
            <img src={img4} alt="img" />
            <p>
              <span>Transparencia total</span>
              <br />
              Todas las acciones son visibles,
              <br />
              identificables y comprobables
              <br />
              en la blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
