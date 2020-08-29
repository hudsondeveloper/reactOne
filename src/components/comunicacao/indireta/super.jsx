import React, { useState } from "react";
import Sub from "./sub";

export default (props) => {
  const [num, setNum] = useState(0);
  const [texto, setTexto] = useState("valor");

  function quandoClicar(valorGerado, textoGerado) {
    setNum(valorGerado);
    setTexto(textoGerado);
  }

  return (
    <div>
      <h4>
        {texto}:{num}
      </h4>
      <Sub onClicar={quandoClicar}></Sub>
    </div>
  );
};
