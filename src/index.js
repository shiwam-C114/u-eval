import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/common/Nav';
import Home from './component/Home';
import Login from './component/Login';
import Booking from './component/Booking';
import Movie from './component/Movie';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
     <ChakraProvider>

    <BrowserRouter>
    <Nav />
    <Routes>
      
      <Route path='/'element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/Booking' element={<Booking />} />
      <Route path='/Movie' element={<Movie/>}/>

    </Routes>
    </BrowserRouter>

     </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
