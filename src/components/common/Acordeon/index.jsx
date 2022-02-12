import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import style from './index.module.css';

export const Acordeon = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            if (index === -1) {
                _activeIndex.push(itemIndex);
            }
            else {
                _activeIndex.splice(index, 1);
            }
        }

        setActiveIndex(_activeIndex);
    }

    return(
        <div className={style.accordion}>
            <div className='Card'>
                <Accordion activeIndex={0}>
                    <AccordionTab header="¿Qué es un tour vitual inmobiliario?">
                        <p>hola1</p>
                    </AccordionTab>
                    <AccordionTab header="¿Qué es Unrealstate?">
                        <p>hola2</p>
                    </AccordionTab>
                    <AccordionTab header='¿Para qué sirven los "tours o visitas?" virtuales'>
                        <p>hola3</p>
                    </AccordionTab>
                    <AccordionTab header="¿Qué necesito para virtualizar uan casa o crear una visita virtual?">
                        <p>hola4</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};
