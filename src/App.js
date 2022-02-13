import React from 'react';
import { Homepage } from './views/Homepage';



import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

 

export const App = () => {
  return (
      <div>
        <Homepage />
      </div>
  )
}
