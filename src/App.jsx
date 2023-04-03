import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import DashBoard from './components/DashBoard/DashBoard';
import PhoneBar from './components/PhoneBar/PhoneBar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  );
};

export default App;