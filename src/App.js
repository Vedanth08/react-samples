import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';


function App() {
  return (
    <>
      <Header title="My Todolist"/>
      <Footer/>
    </>
  );
}

export default App;
