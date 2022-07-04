import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './components/Card';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Shirt from './components/subcomponent/Shirt';
import Pant from './components/subcomponent/Pant';
function App() {
 
 let [input, setInput] = useState('');
  return (

    <>
    <BrowserRouter>
    <Header setInput={setInput}/>
    <Subheader/>
    {/* <Card /> */}
      <Routes>
        <Route path="/" element={<Card input={input}/>}/>
          <Route path="/shirt" element = {<Shirt/>} />
        <Route path="/pant" element = {<Pant/>} />
      
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
