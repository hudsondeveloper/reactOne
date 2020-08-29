import React from "react";
import "./App.css";
import ComParametro from "./components/basicos/ComParametro";
//import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/pai";
import Super from "./components/comunicacao/indireta/super";
import Input from "./components/form/input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="Mega" color="#69D2E7">
        <Mega qtd={8} />
      </Card>
      <Card titulo="Contador" color="#69D2E7">
        <Contador passo={10} />
      </Card>
      <Card titulo="Input" color="#69D2E7">
        <Input />
      </Card>
      <Card titulo="Comunicação Indireta" color="#69D2E7">
        <Super />
      </Card>
      <Card titulo="Comunicação Direta" color="#69D2E7">
        <Pai sobreNome="Freitas" />
      </Card>
      <Card titulo="Condicional if" color="#69D2E7">
        <CondicionalComIf numero={10} />
      </Card>
      <Card titulo="Condicional" color="#69D2E7">
        <Condicional numero={11} />
      </Card>
      <Card titulo="Repetição" color="#69D2E7">
        <Repeticao />
      </Card>
      <Card titulo="Comente com Paramentro" color="#69D2E7">
        <ComParametro titulo="hud" subtitulo="luis" />
      </Card>
      <Card titulo="Primeiro Componente" color="#69D2E7">
        <Primeiro />
      </Card>
      <Card titulo="Componentes com Filhos" color="#69D2E7">
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </Card>
    </div>
  </div>
);
