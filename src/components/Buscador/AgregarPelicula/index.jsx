import React, { useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SaveLocalStorage } from "../../../helpers/SaveLocalStorage";

const CrearPelicula = ({ setPeliculas }) => {
  const [dataPeliculas, setDataPeliculas] = useState({
    id: "",
    titulo: "",
    descripcion: "",
    url: "",
  });

  const submitButton = (e) => {
    e.preventDefault();
    const data = e.target;
    const pelicula = {
      id: new Date().getTime(),
      titulo: data.titulo.value,
      descripcion: data.descripcion.value,
      url: data.url.value,
    };
    
    setDataPeliculas(pelicula);

    setPeliculas((elementos) => {
      return [...elementos, pelicula];
    });

    SaveLocalStorage("pelicula", pelicula);
    data.titulo.value = "";
    data.descripcion.value = "";
    data.url.value = "";
  };

  return (
    <>
      <h5>Agrega Pelicula</h5>
      <form onSubmit={submitButton}>
        <FloatingLabel
          controlId="floatingInput"
          label="Titulo"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Titulo" name="titulo"/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="URL" className="mb-3">
          <Form.Control type="text" placeholder="URL" name="url" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Descripcion">
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            name="descripcion"
            placeholder="descripcion"
          />
        </FloatingLabel>
        <Button variant="custom" type="Submit" className="m-3 botonColor" >
          Agregar
        </Button>
      </form>
    </>
  );
};

export default CrearPelicula;
