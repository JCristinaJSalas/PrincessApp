import React, { useEffect, useState } from "react";
import { GetLocalStorage } from "../../helpers/SaveLocalStorage";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "../Modal";

const Peliculas = ({ pelisState, setPeliculas }) => {
  const [modal, setModal] = useState(false);
  const [peliEditar, setPeliEditar] = useState([]);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    const data = GetLocalStorage("pelicula");
    setPeliculas(data);
    return data;
  };

  const BorrarPeli = (id) => {
    const peliculasLista = GetLocalStorage("pelicula");
    const newPeliculasLista = peliculasLista.filter((peli) => {
      return peli.id !== id;
    });
    setPeliculas(newPeliculasLista);
    localStorage.setItem("pelicula", JSON.stringify(newPeliculasLista));
  };

  const MostrarModal = (data, id) => {
    setModal(true);
    setPeliEditar(data);
  };

  return (
    <>
      {modal === true ? (
        <Modal
          setModal={setModal}
          peliEditar={peliEditar}
          setPeliculas={setPeliculas}
          conseguirPeliculas={conseguirPeliculas}
          setPeliEditar={setPeliEditar}
        />
      ) : (
        <></>
      )}

      <div className="contenedor-peliculas">
        {pelisState.length === 0 || pelisState === null ? (
          <div>
            <br />
            <h3>Aun no hay peliculas.</h3>
            <hr />
            <span>Agrega tu pelicula. Ejemplo:</span>
            <Card className="contenedor-tarjeta">
              <Card.Img
                variant="top"
                style={{ height: "160px", objectFit: "scale-down" }}
                src="https://i.pinimg.com/564x/0d/a5/94/0da594098d5024b8e17e0c6debc18ab2.jpg"
              />
              <Card.Body>
                <Card.Title>Bella y la Bestia</Card.Title>
                <Card.Text>Describe tu pelicula.</Card.Text>
                <Button variant="outline-info">Editar</Button>{" "}
                <Button variant="outline-danger">Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <>
            {pelisState.map((data) => {
              return (
                <Card className="contenedor-tarjeta" key={data.id}>
                  <Card.Img
                    variant="top"
                    style={{ height: "160px", objectFit: "cover" }}
                    src={data.url}
                  />
                  <Card.Body>
                    <Card.Title>{data.titulo}</Card.Title>
                    <Card.Text>{data.descripcion}</Card.Text>
                    <Button
                      variant="outline-info"
                      onClick={(e) => {
                        MostrarModal(data, data.id);
                      }}
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        BorrarPeli(data.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Peliculas;
