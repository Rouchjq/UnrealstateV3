import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import style from "./index.module.css";
import { Templateheader } from "./Template/Templateheader";

export const Acordeon = () => {
  return (
    <div className={style.acordeon}>
      <div className="Card">
        <Accordion activeIndex={0}>
          <AccordionTab
            headerTemplate={<Templateheader Texto="¿Qué es Unrealstate?" />}
          >
            <p>
              Es una plataforma que acerca vendedores, promotores,
              constructoras, inmobiliarias, para converger todas juntas en una
              misma plataforma con un mismo fin vender inmuebles.
            </p>
          </AccordionTab>
          <AccordionTab
            headerTemplate={
              <Templateheader Texto="¿Qué es un tour vitual inmobiliario?" />
            }
          >
            <p>
              Un Tour Virtual inmobiliario es un sistema para poder acercar la
              experiencia de una visita de un inmueble sin límite de distancia.
            </p>
          </AccordionTab>
          <AccordionTab
            headerTemplate={
              <Templateheader Texto='¿Para qué sirven los "tours o visitas" virtuales ?' />
            }
          >
            <p>
              Esta tecnología nos facilita que el cliente pueda repetir las
              veces que quiera la experiencia, ahorrar en desplazamientos y en
              tiempo, y evitar esperas innecesarias para poder visitar un
              inmueble.
            </p>
          </AccordionTab>
          <AccordionTab
            headerTemplate={
              <Templateheader Texto="¿Qué necesito para virtualizar una casa o crear una visita virtual?" />
            }
          >
            <p>
              Para poder Virtual izar el inmueble necesitarás que te hagamos un
              vídeo Tour de el inmueble seguido de añadir toda la información
              dentro de nuestra plataforma para así poder entrar en las opciones
              de compra-venta que ofrece la plataforma.
            </p>
          </AccordionTab>
          <AccordionTab
            headerTemplate={
              <Templateheader Texto="¿Que es la blockchain? Y porque la usamos?" />
            }
          >
            <p>
              A través de la tecnología Blockchain y el Internet 3.0 la
              plataforma, dota de seguridad y fiabilidad para hacer todas las
              transacciones mucho mas rapidas y legales, poniendo al alcance de
              todos la información de todo el sistema inmobiliario.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};
