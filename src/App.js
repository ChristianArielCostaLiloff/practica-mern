import logo from "./logo.svg";
import "./App.css";
import data from "./data/dataEventos";
import TextoCard from "./components/TextoCard";
import BotonCambio from "./components/BotonCambio";
import { useState } from "react";
import React from "react";

function App() {
  let [numeroACambiar, setNumeroACambiar] = useState(0);
  let [mostrarOcultar, setMostrarOcultar] = useState(true);
  let siguiente = () => {
    if (numeroACambiar < data.length - 1) {
      setNumeroACambiar(++numeroACambiar);
    } else {
      setNumeroACambiar(0);
    }
  };
  let anterior = () => {
    if (numeroACambiar > 0) {
      setNumeroACambiar(--numeroACambiar);
    } else {
      setNumeroACambiar(data.length - 1);
    }
  };
  let mostrar = () => {
    setMostrarOcultar(!mostrarOcultar);
  };
  return (
    <div className="container">
      <div className="card">
        <h2 className="card__category">{data[numeroACambiar].category}</h2>
        <figure className="card__image">
          <img src={data[numeroACambiar].image} alt="" />
        </figure>
        {mostrarOcultar ? (
          <>
            <TextoCard
              nombre={data[numeroACambiar].name}
              descripcion={data[numeroACambiar].description}
            />
            <div className="card__buttons">
              <BotonCambio
                nombre="Anterior"
                estilo="btn btn--left"
                accion={anterior}
              />
              <BotonCambio nombre="Ocultar" estilo="btn" accion={mostrar} />
              <BotonCambio
                nombre="Siguiente"
                estilo="btn btn--right"
                accion={siguiente}
              />
            </div>
          </>
        ) : (
          <BotonCambio nombre="Mostrar" estilo="btn" accion={mostrar} />
        )}
      </div>
    </div>
  );
}

export default App;
