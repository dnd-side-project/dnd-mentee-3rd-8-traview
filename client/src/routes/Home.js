import React from 'react';
import MainGrid from '../components/MainGrid';
import Banner from '../components/Home/Banner';
import PickBox from '../components/Home/PickBox';
export default () => {
  return (
    <>
      {/*Banner*/}
      <Banner />

      {/*  3 Pick Box(ex Followers Pick)*/}
      <PickBox />

      <div>
        {/* magical place '*/}
        <MainGrid />
      </div>
    </>
  );
};
