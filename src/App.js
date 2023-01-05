import React from 'react';
import './App.css';
import { Header } from './component/Header/Header';
import Filter from './component/Filter/Filter';
import { Cards } from './component/Card/Cards';
import Footer from './component/Footer/Footer';



function App() {

  return (
    <div className="App">
     <Header />
     <Filter />
     <Cards />
     <Footer />
    </div>
  );
}

export default App;
