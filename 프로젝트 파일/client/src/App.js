import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Nav from './Main/Nav/nav';
import SignUp from './Main/Header/SignUp';
import SignIn from './Main/Header/SignIn';
import BodyImage from './Main/Content/BodyImage';
import Soket from './Main/Content/Soket';
import Banner from './Main/Content/Banner';
import Weather from './Main/Footer/Wheather';
import MyPage from './Main/MyPage/mypage';
import Footer from './Main/Footer/footer';




function App() {

  //세션값 변수에 저장 
  

  return (
    <div className="App">
      <Nav />
      <Weather/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyImage  />}></Route>
          <Route path="/map" element={<Soket />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
     <Banner  />
     <Footer />
     

    </div>
  )
}

export default App;