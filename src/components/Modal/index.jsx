import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { GetLocalStorage } from "../../helpers/SaveLocalStorage";

const ModalEditar = ({
  setModal,
  peliEditar,
  setPeliculas,
  conseguirPeliculas,
  setPeliEditar,
}) => {
  const guardarButton = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const data = conseguirPeliculas();
    const indice = data.findIndex((pelicula) => pelicula.id === id);

    const peliculaActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
      url: target.url.value,
    };
    data[indice] = peliculaActualizada;

    localStorage.setItem("pelicula", JSON.stringify(data));
    setPeliculas(data);
    setPeliEditar([])

    setModal(false);
  };

  const Cerrar = () => {
    setModal(false);
  };

  return (
    <div className="Overlay">
      <div className="contenedor-modal">
        <h5>Editar Pelicula</h5>
        <form onSubmit={(e) => guardarButton(e, peliEditar.id)}>
          <>
            <FloatingLabel
              controlId="floatingInput"
              className="mb-3"
              label="Titulo"
            >
              <Form.Control
                type="text"
                name="titulo"
                defaultValue={peliEditar.titulo}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="url"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="url"
                defaultValue={peliEditar.url}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="descripcion">
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                name="descripcion"
                defaultValue={peliEditar.descripcion}
              />
            </FloatingLabel>
          </>

          <div className="Botones">
            <Button
              variant="secondary"
              type="Submit"
              className="m-3"
              onClick={Cerrar}
            >
              Close
            </Button>
            <Button variant="success" type="Submit" className="m-3">
              Guardar
            </Button>
          </div>
        </form>
        <Button
          variant="outline-secondary"
          type="Submit"
          className="botonX"
          size="sm"
          onClick={Cerrar}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default ModalEditar;
