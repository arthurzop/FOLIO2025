import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

import prof1 from "./assets/prof1.png";
import prof2 from "./assets/prof2.png";
import port1 from "./assets/port1.png";
import port2 from "./assets/port2.png";
import luiz1 from "./assets/luiz1.png";
import luiz2 from "./assets/luiz2.png";
import sup1 from "./assets/sup1.png";
import sup2 from "./assets/sup2.png";
import code1 from "./assets/code1.png";
import code2 from "./assets/code2.png";
import chevron from "./assets/chevron.svg";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

import pdf from "./assets/pdf/curriculo_artur_medeiros.pdf";

import { motion } from "motion/react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  let [prof, setProf] = useState(false);
  let [luiz, setLuiz] = useState(false);
  let [code, setCode] = useState(false);
  let [data, setData] = useState(false);
  let [sup, setSup] = useState(false);
  let [port, setPort] = useState(false);
  let [tcc, setTcc] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header") && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="248, 249, 250"
        outerAlpha={1}
        innerScale={0.5}
        outerScale={6}
        outerStyle={{
          mixBlendMode: "difference",
        }}
        clickables={[
          "a",
          "p",
          "h1",
          "h6",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <div className="container">
        <header className="header" data-aos="fade-down" data-aos-duration="600">
          <h1 onClick={() => window.scrollTo(0, 0)}>artur medeiros</h1>

          <nav className={`link-container ${isOpen ? "open" : ""}`}>
            <a
              onClick={() => window.open(pdf, "_blank")}
              className="a-container cv"
            >
              Curriculum
            </a>
            <a
              href="https://www.behance.net/arthurzop"
              target="_blank"
              className="a-container be"
            >
              Behance
            </a>
            <a
              href="https://github.com/arthurzop"
              target="_blank"
              className="a-container gi"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/artur-medeiros-7169b8266/"
              target="_blank"
              className="a-container li"
            >
              Linkedin
            </a>
          </nav>

          <div
            className="menu-toggle"
            onClick={handleMenu}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? close : menu}
              alt={isOpen ? "Fechar menu" : "Abrir menu"}
            />
          </div>
        </header>
        <div id="top"></div>
        <div>
          <section>
            <div className="main">
              <h1
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                artur medeiros
              </h1>
              <h1
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                web & design
              </h1>
              <h1
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="1750"
              >
                @ são paulo - BR
              </h1>
              <h1
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="2000"
              >
                potfolio © 2025
              </h1>
              <a href="#target" className="indicator">
                <img src={chevron} alt="scroll down indicator" />
              </a>
            </div>
          </section>
          <section>
            <div className="table-container">
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: prof ? "auto" : 0,
                    opacity: prof ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    Projeto de Identidade Visual para meu chefe e antigo
                    professor Lucas Corrêa. Baseando a estética da marca na
                    herança africana dele, criamos a logo e paleta de cores em
                    cima disso.
                    <br />
                    <br />
                    Para a paleta, utilizamos cores quentes mas não saturadas,
                    assim conseguindo alcançar o que desejávamos: deixar a marca
                    com um tom lúdico e jovial, mas sem perder a importância e
                    autoridade que um professor deseja.
                    <br />
                    <br />
                    Para a logo usamos a fonte 'Obviously Wide' para trazer esse
                    tom cartoonesco / lúdico, e o símbolo foi fortemente
                    inspirado em padrões culturais africanos.
                  </p>
                  <div className="btn-container">
                    <a
                      target="_blank"
                      href="https://www.behance.net/gallery/218017203/Prof-Correa-Brand-Design"
                    >
                      <button className="behance">Projeto no Behance</button>
                    </a>
                  </div>
                  <div className="img-container">
                    <img src={prof1} alt="" />
                    <img src={prof2} alt="" />
                  </div>
                </motion.div>
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: luiz ? "auto" : 0,
                    opacity: luiz ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    Desenvolvi um projeto freelancer de identidade visual e web
                    design para o portfólio de outro ex-aluno do SENAI. Criei a
                    logo e a identidade visual utilizando cores que remetem à
                    tecnologia, alinhadas à sua área de atuação como Cloud
                    Architect e DevOps.
                    <br />
                    <br />
                    Na prototipação do site, optei por uma estética moderna,
                    incluindo light e dark mode para melhor experiência do
                    usuário.
                  </p>
                  <div className="btn-container">
                    <a
                      target="_blank"
                      href="https://www.behance.net/gallery/218014731/Luiz-Brito-Branding-Web-Design"
                    >
                      <button className="behance">Projeto no Behance</button>
                    </a>
                  </div>
                  <div className="img-container">
                    <img src={luiz1} alt="" />
                    <img src={luiz2} alt="" />
                  </div>
                </motion.div>
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: code ? "auto" : 0,
                    opacity: code ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    O maior projeto no qual já trabalhei! Começamos
                    desenvolvendo a identidade visual e, a partir dela, criamos
                    um website e um aplicativo mobile completos.
                    <br />
                    A aplicação foi projetada para que desenvolvedores e
                    designers brasileiros possam discutir e esclarecer dúvidas
                    entre si.
                    <br />
                    Nesse projeto, também tive a oportunidade de aplicar e
                    documentar a metodologia do 'Atomic Design'. Escrevi um
                    miniartigo sobre o tema, explicando como essa abordagem
                    impactou positivamente a construção desse grande projeto.
                  </p>

                  <div className="img-container">
                    <img src={code1} alt="" />
                    <img src={code2} alt="" />
                  </div>
                </motion.div>
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: data ? "10%" : 0,
                    opacity: data ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    Fui contratado por um ex-professor do SENAI para projetar o
                    site de sua empresa, garantindo responsividade e seguindo os
                    detalhes especificados no escopo.
                    <br />
                    Optei por uma estética moderna, alinhada à atuação da
                    empresa nas áreas de análise de dados e automação com IA,
                    utilizando o modo escuro, destaques em roxo, etc.
                  </p>
                </motion.div>
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: sup ? "auto" : 0,
                    opacity: sup ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    Meu primeiro projeto de identidade visual, desenvolvido para
                    a empresa onde trabalho até hoje. Além da logo, criei toda a
                    identidade, desde a paleta de cores até o website.
                    <br />
                    Foi nesse projeto que aprendi grande parte do que sei hoje,
                    onde elaborei meu primeiro brand guidelines e projetei meu
                    primeiro site atuando exclusivamente como web designer,
                    enquanto outra pessoa ficou responsável pelo código.
                    <br />
                    Também desenvolvi mockups de produtos e materiais para redes
                    sociais.
                  </p>
                  <div className="btn-container">
                    <a
                      target="_blank"
                      href="https://www.behance.net/gallery/218018417/Suporte-de-Domingo-Brand-Guidelines"
                    >
                      <button className="behance">Projeto no Behance</button>
                    </a>
                  </div>
                  <div className="img-container">
                    <img src={sup1} alt="" />
                    <img src={sup2} alt="" />
                  </div>
                </motion.div>
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: port ? "auto" : 0,
                    opacity: port ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    Meu portfólio de 2024, que considero como um filho de tanto
                    orgulho que tenho pelo que desenvolvi. Criei em meados de
                    maio de 2024 e busco mantê-lo sempre atualizado.
                    <br />
                    Foi meu primeiro portfólio real, desenvolvido utilizando a
                    biblioteca React 95 para trazer essa estética nostálgica da
                    internet antiga.
                    <br />
                    Também inclui diversas interações, como temas
                    personalizados, acesso ao meu currículo e a possibilidade de
                    enviar e-mails diretamente para mim.
                  </p>

                  <div className="btn-container">
                    <a
                      target="_blank"
                      href="https://www.behance.net/gallery/205263707/Portfolio-95"
                    >
                      <button className="behance">Projeto no Behance</button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/arthurzop/Portifolio95"
                    >
                      <button className="github">Projeto no Github</button>
                    </a>
                  </div>
                  <div className="img-container">
                    <img src={port1} alt="" />
                    <img src={port2} alt="" />
                  </div>
                </motion.div>
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
                <motion.div
                  className="details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: tcc ? "auto" : 0,
                    opacity: tcc ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <p>
                    <p>
                      Meu primeiro grande projeto, onde tive a oportunidade de
                      desenvolver uma aplicação completa (design e código) para
                      o Trabalho de Conclusão de Curso do SENAI.
                      <br />
                      Fui responsável por projetar e codificar todo o front-end,
                      implementando funcionalidades e alinhando o
                      desenvolvimento com outras áreas, como banco de dados e
                      back-end.
                      <br />
                      Além disso, atuei como líder do projeto, gerenciando
                      reuniões, prazos de entrega e apresentações.
                    </p>
                  </p>
                  <div className="btn-container">
                    <a
                      target="_blank"
                      href="https://github.com/vanguardtech7/TCC"
                    >
                      <button className="github">Projeto no Github</button>
                    </a>
                  </div>
                </motion.div>
              )}
              <div className="divider" id="target"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
