import React from "react";

export default function TextoCard(props) {
  let { nombre, descripcion } = props;
  return (
    <div className="card__text">
      <h5>{nombre}</h5>
      <p>{descripcion}</p>
    </div>
  );
}
