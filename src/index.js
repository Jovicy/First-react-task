import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

let el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
  </>
);