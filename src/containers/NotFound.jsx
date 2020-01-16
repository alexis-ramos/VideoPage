import React from "react";

const NotFound = () => (
  // NOTA: React.fragment nos ayuda a evitar que se creen mas elementos en el DOM
  <React.Fragment>
    <h1>No encontrado</h1>
  </React.Fragment>
);

export default NotFound;
