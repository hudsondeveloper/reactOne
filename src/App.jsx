import React from "react";
import "./App.css";
import ComParametro from "./components/basicos/ComParametro";
//import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

export default (props) => (
  <div className="App">
    <Card titulo="Condicional">
      <CondicionalComIf numero={10} />
    </Card>
    <Card titulo="Condicional">
      <Condicional numero={11} />
    </Card>
    <Card titulo="Repetição">
      <Repeticao />
    </Card>
    <Card titulo="Comente com Paramentro">
      <ComParametro titulo="hud" subtitulo="luis" />
    </Card>
    <Card titulo="Primeiro Componente">
      <Primeiro />
    </Card>
    <Card titulo="Componentes com Filhos">
      <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>
      </ul>
    </Card>
    <Card titulo="Exercício X">Conteudo</Card>
  </div>
);
