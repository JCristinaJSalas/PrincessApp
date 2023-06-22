
export const SaveLocalStorage = (clave, elemento) => {
  //tomar los datos que tiene el localstore
  let elementos = JSON.parse(localStorage.getItem(clave));
  // comprobar si es array
  if (Array.isArray(elementos)) {
    //agregar un elemento nuevo
    elementos.push(elemento);
  } else {
    elementos = [elemento];
  }
  //guardar en el LocalStore
  //json.stringify convierte el objeto pelis en una cadena de texto con la info
  localStorage.setItem(clave, JSON.stringify(elementos));

  return elemento
};

export const GetLocalStorage = (clave) => {
  let data = JSON.parse(localStorage.getItem(clave))
  return data;
}  