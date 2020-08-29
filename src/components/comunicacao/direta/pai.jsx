import React from "react";
import Filho from "./filho";

export default (props) => (
  <div>
    <Filho {...props}>
      <strong>João</strong>
    </Filho>
    <Filho sobreNome={props.sobreNome}>
      <strong>Maria</strong>
    </Filho>
    <Filho sobreNome="Silva">
      <strong>Pedro</strong>
    </Filho>
  </div>
);
