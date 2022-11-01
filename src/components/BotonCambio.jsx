import React from "react";

export default function BotonCambio(props) {
  let { nombre, estilo, accion } = props;
  return <button className={estilo} onClick={accion}>{nombre}</button>;
}
