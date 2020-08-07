import React from 'react';
import MainGrid from '../components/MainArea/MainArea';
import Banner from '../components/Banner/Banner';
import PickBox from '../components/PickBox/PickBox';
export default () => {
  return (
    <>
      {/*Banner*/}
      <Banner />

      {/*  3 Pick Box(ex Followers Pick)*/}
      <PickBox />

      {/* magical place '*/}
      <MainGrid />
    </>
  );
};
