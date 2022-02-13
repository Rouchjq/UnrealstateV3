import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import style from './index.module.css';
import { Templateheader } from './Template/Templateheader';

export const Acordeon = () => {
    return(
        <div className={style.acordeon}>
            <div className='Card'>
                <Accordion activeIndex={0}>
                    <AccordionTab headerTemplate={<Templateheader Texto='¿Qué es un tour vitual inmobiliario?'/>}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum earum adipisci vitae ipsum eaque? Praesentium pariatur natus dicta officiis quidem ratione, dolor accusantium modi molestias quis tempore explicabo sunt a!</p>
                    </AccordionTab>
                    <AccordionTab headerTemplate={<Templateheader Texto='¿Qué es Unrealstate?'/>}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam corrupti quasi quae dolorem deleniti amet. Velit accusantium asperiores veniam, molestiae tempore blanditiis rem accusamus saepe quas cum non ipsum!</p>
                    </AccordionTab>
                    <AccordionTab headerTemplate={<Templateheader Texto='¿Para qué sirven los "tours o visitas" virtuales ?' />}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam facere excepturi nostrum dolorem, animi eveniet sit praesentium quasi placeat sequi debitis id! Cupiditate, atque esse nam nobis deserunt veniam!</p>
                    </AccordionTab>
                    <AccordionTab headerTemplate={<Templateheader Texto="¿Qué necesito para virtualizar uan casa o crear una visita virtual?" />}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo quaerat cum, cumque labore ad praesentium possimus, quasi autem voluptatum aliquam mollitia non sapiente assumenda, fuga architecto necessitatibus. Amet, consectetur.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};

