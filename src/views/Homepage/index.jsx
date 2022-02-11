import React from 'react';
import { Header } from '../../components/common/Header';
import { HomeSection1 } from '../../components/layout/HomeSection1';
import { HomeSection2 } from '../../components/layout/HomeSection2';

export const Homepage = () => {
  return (   
      <>
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      </>
  )
}
