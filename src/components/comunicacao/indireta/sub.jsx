import React from "react";

export default (props) => {
  return (
    <button
      onClick={() => {
        props.onClicar(Math.random(), "texto");
      }}
    >
      Alterar
    </button>
  );
};
