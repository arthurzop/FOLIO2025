import { useState } from "react";
import "./App.css";

import prof1 from "./assets/prof1.png";
import prof2 from "./assets/prof2.png";

function App() {
  let [prof, setProf] = useState(false);
  let [luiz, setLuiz] = useState(false);
  let [code, setCode] = useState(false);
  let [data, setData] = useState(false);
  let [sup, setSup] = useState(false);
  let [port, setPort] = useState(false);
  let [tcc, setTcc] = useState(false);

  const handleClick = (option) => {
    switch (option) {
      case "prof":
        setProf(!prof);
        break;

      case "luiz":
        setLuiz(!luiz);
        break;

      case "code":
        setCode(!code);
        break;

      case "data":
        setData(!data);
        break;

      case "sup":
        setSup(!sup);
        break;

      case "port":
        setPort(!port);
        break;

      case "tcc":
        setTcc(!tcc);
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div className="head">
          <p>projetos</p>
          <p>Categoria</p>
          <p>ano</p>
        </div>
        <div className="divider"></div>
        <div
          className="row"
          onClick={() => {
            handleClick("prof");
          }}
        >
          <p>Prof Corrêa</p>
          <p>Identidade visual</p>
          <p>2025</p>
        </div>
        {prof && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
        <div className="divider"></div>

        <div
          className="row"
          onClick={() => {
            handleClick("luiz");
          }}
        >
          <p>Luiz Brito</p>
          <p>Identidade visual, Web Design</p>
          <p>2025</p>
        </div>
        {luiz && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
        <div className="divider"></div>

        <div
          className="row"
          onClick={() => {
            handleClick("code");
          }}
        >
          <p>Code Trouble</p>
          <p>Identidade Visual, Web & App Design</p>
          <p>2024 - 2025</p>
        </div>
        {code && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
        <div className="divider"></div>

        <div
          className="row"
          onClick={() => {
            handleClick("data");
          }}
        >
          <p>Data Mastery</p>
          <p>web design</p>
          <p>2024</p>
        </div>
        {data && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
        <div className="divider"></div>

        <div
          className="row"
          onClick={() => {
            handleClick("sup");
          }}
        >
          <p>suporte de domingo</p>
          <p>identidade visual, web design</p>
          <p>2024</p>
        </div>
        {sup && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
        <div className="divider"></div>

        <div
          className="row"
          onClick={() => {
            handleClick("port");
          }}
        >
          <p>portfolio pessoal</p>
          <p>desenvolvimento front-end</p>
          <p>2024</p>
        </div>
        {port && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
        <div className="divider"></div>

        <div
          className="row"
          onClick={() => {
            handleClick("tcc");
          }}
        >
          <p>TCC - SENAI</p>
          <p>desenvolvimento front-end</p>
          <p>2024</p>
        </div>
        {tcc && (
          <div className="details-container">
            <p>
              Projeto de Identidade Visual para meu chefe e antigo professor
              Lucas Corrêa. Baseando a estética da marca na herança africana
              dele, criamos a logo e paleta de cores em cima disso.
              <br />
              Para a paleta, utilizamos cores quentes mas não saturadas, assim
              conseguindo alcançar o que desejávamos: deixar a marca com um tom
              lúdico e jovial, mas sem perder a importância e autoridade que um
              professor deseja.
              <br />
              Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom
              cartoonesco / lúdico, e o símbolo foi fortemente inspirado em
              padrões culturais africanos.
            </p>
            <div className="btn-container">
              <button className="behance">Projeto no Behance</button>
              <button className="github">Projeto no Github</button>
            </div>
            <div className="img-container">
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </>
  );
}

export default App;
