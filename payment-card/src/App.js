import './App.css';
import React from 'react';
import Card from './components/Card';
import { GrAmazon } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'
function App() {
 
  return (
    <div className="App">
       <Card textName="Amazon Gift" date="25/5/2020" desc="Desktop - Mobile" logo={<GrAmazon/>} arrlogo={<AiOutlineArrowRight />} />
       <Card textName="Amazon Gift" date="25/10/2020" desc="Desktop - Mobile" logo={<GrAmazon/>} arrlogo={<AiOutlineArrowRight />} />
       <Card  textName="Apple Gift" date="17 Sept 2020" logo={<BsApple />} desc="MacOS - Mobile" arrlogo={<AiOutlineArrowRight />}/>
    </div>
  );
}

export default App;
