//import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Buscador from "./components/Buscador";
import Peliculas from "./components/Peliculas";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [pelis, setPeliculas] = useState([]);
  
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="peliculas">
        <Peliculas pelisState={pelis} setPeliculas={setPeliculas}/>
      </div>
      <div className="buscador">
        <Buscador setPeliculas={setPeliculas} pelis={pelis}/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
