import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const BuscadorInfo = ({ setPeliculas, pelis }) => {
  const [buscando, setBuscando] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPelicula = (e) => {
    setBuscando(e.target.value);
    let peliEncontrada = pelis.filter((peli) => {
      return peli.titulo.toLowerCase().includes(buscando.toLocaleLowerCase());
    });
    if (buscando.length <= 1 || peliEncontrada <= 0) {
      peliEncontrada = JSON.parse(localStorage.getItem("pelicula"));
      setNoEncontrado(true);
    }
    else{
      setNoEncontrado(false);
    }
    setPeliculas(peliEncontrada);
  };

  return (
    <>
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Buscar"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPelicula}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={buscarPelicula}
        >
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
      {(noEncontrado == true && buscando.length > 1) && (
        <h4 className="Titulo_noencontrado">
          No se ha encontrado ninguna coincidencia con: {buscando}
        </h4>
      )}
    </>
  );
};

export default BuscadorInfo;
