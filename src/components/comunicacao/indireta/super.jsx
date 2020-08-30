import React, { useState, useEffect } from "react";
import Sub from "./sub";

export default (props) => {
  const [num, setNum] = useState(0);
  const [texto, setTexto] = useState("valor");

  useEffect(() => {
    alert(num);
  }, [texto, num]);

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
