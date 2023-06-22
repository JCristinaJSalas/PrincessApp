import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import CrearPelicula from "./AgregarPelicula";
import BuscadorInfo from "./Buscador-info";

const Buscador = ({ setPeliculas, pelis }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mostrar, setMostrar] = useState(false);

  const mostrarAgregar = () => {
    setMostrar(!mostrar);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Eliminar el listener del evento resize al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <>
      <BuscadorInfo pelis={pelis} setPeliculas={setPeliculas} />
      {windowWidth >= 768 ? (
        <div className="contenedor-buscador">
          <CrearPelicula setPeliculas={setPeliculas} />
        </div>
      ) : (
        <div className="BotonAgregar">
          <Button
            variant="btn btn-outline-secondary"
            onClick={mostrarAgregar}
            className="m-1"
          >
            {(mostrar && (
              <i className="bi bi-dash-square-dotted "> Agregar Peli</i>
            )) || <i className="bi bi-plus-square-dotted color"> Agregar Peli</i>}
          </Button>
          {(mostrar && (
            <div className="contenedor-buscador">
              <CrearPelicula setPeliculas={setPeliculas} />
            </div>
          )) || <></>}
        </div>
      )}
    </>
  );
};

export default Buscador;
