import React from 'react';
import { Footer } from '../../components/common/Footer';
import { Homesection1 } from '../../components/layout/Homesection1';
import { Homesection2 } from '../../components/layout/Homesection2';
import { Homesection3 } from '../../components/layout/Homesection3';
import { Homesection4 } from '../../components/layout/Homesection4';
import { Homesection5 } from '../../components/layout/Homesection5';
import { Homesection7 } from '../../components/layout/Homesection7';

export const Homepage = () => {
  return (
    <>
      <Homesection1 />
      <Homesection2 />
      <Homesection3 />
      <Homesection4 />
      <Homesection5 />
      {/* Homesection6 en Homesection5 */}
      <Homesection7 />
      <Footer />
    </>
  );
};
