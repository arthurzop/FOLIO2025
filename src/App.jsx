import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

import prof1 from "./assets/prof1.png";
import prof2 from "./assets/prof2.png";
import port1 from "./assets/port1.png";
import port2 from "./assets/port2.png";
import luiz1 from "./assets/luiz1.png";
import luiz2 from "./assets/luiz2.png";
import data1 from "./assets/data1.png";
import data2 from "./assets/data2.png";
import sup1 from "./assets/sup1.png";
import sup2 from "./assets/sup2.png";
import code1 from "./assets/code1.png";
import code2 from "./assets/code2.png";

import chevron from "./assets/chevron.svg";
import pdf from "./assets/pdf/curriculo_artur_medeiros.pdf";

import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  const handleClick = (project) => {
    setActiveProject(activeProject === project ? null : project);
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

  const projectDetails = {
    prof: {
      title: "Prof Corrêa",
      category: "Identidade visual",
      year: "2025",
      description:
        "Projeto de Identidade Visual para meu chefe e antigo professor Lucas Corrêa. Baseando a estética da marca na herança africana dele, criamos a logo e paleta de cores em cima disso. Para a paleta, utilizamos cores quentes mas não saturadas, assim conseguindo alcançar o que desejávamos: deixar a marca com um tom lúdico e jovial, mas sem perder a importância e autoridade que um professor deseja. Para a logo usamos a fonte 'Obviously Wide' para trazer esse tom cartoonesco / lúdico, e o símbolo foi fortemente inspirado em padrões culturais africanos.",
      images: [prof1, prof2],
      behanceLink:
        "https://www.behance.net/gallery/218017203/Prof-Correa-Brand-Design",
    },
    luiz: {
      title: "Luiz Brito",
      category: "Identidade visual, Web Design",
      year: "2025",
      description:
        "Desenvolvi um projeto freelancer de identidade visual e web design para o portfólio de outro ex-aluno do SENAI. Criei a logo e a identidade visual utilizando cores que remetem à tecnologia, alinhadas à sua área de atuação como Cloud Architect e DevOps. Na prototipação do site, optei por uma estética moderna, incluindo light e dark mode para melhor experiência do usuário.",
      images: [luiz1, luiz2],
      behanceLink:
        "https://www.behance.net/gallery/218014731/Luiz-Brito-Branding-Web-Design",
    },
    code: {
      title: "Code Trouble",
      category: "Identidade Visual, Web & App Design",
      year: "2024 - 2025",
      description:
        "O maior projeto no qual já trabalhei! Começamos desenvolvendo a identidade visual e, a partir dela, criamos um website e um aplicativo mobile completos. A aplicação foi projetada para que desenvolvedores e designers brasileiros possam discutir e esclarecer dúvidas entre si. Nesse projeto, também tive a oportunidade de aplicar e documentar a metodologia do 'Atomic Design'. Escrevi um miniartigo sobre o tema, explicando como essa abordagem impactou positivamente a construção desse grande projeto.",
      images: [code1, code2],
    },
    data: {
      title: "Data Mastery",
      category: "web design",
      year: "2024",
      description:
        "Fui contratado por um ex-professor do SENAI para projetar o site de sua empresa, garantindo responsividade e seguindo os detalhes especificados no escopo. Optei por uma estética moderna, alinhada à atuação da empresa nas áreas de análise de dados e automação com IA, utilizando o modo escuro, destaques em roxo, etc.",
      images: [data1, data2],
    },
    sup: {
      title: "suporte de domingo",
      category: "identidade visual, web design",
      year: "2024",
      description:
        "Meu primeiro projeto de identidade visual, desenvolvido para a empresa onde trabalho até hoje. Além da logo, criei toda a identidade, desde a paleta de cores até o website. Foi nesse projeto que aprendi grande parte do que sei hoje, onde elaborei meu primeiro brand guidelines e projetei meu primeiro site atuando exclusivamente como web designer, enquanto outra pessoa ficou responsável pelo código. Também desenvolvi mockups de produtos e materiais para redes sociais.",
      images: [sup1, sup2],
      behanceLink:
        "https://www.behance.net/gallery/218018417/Suporte-de-Domingo-Brand-Guidelines",
    },
    port: {
      title: "portfolio pessoal",
      category: "desenvolvimento front-end",
      year: "2024",
      description:
        "Meu portfólio de 2024, que considero como um filho de tanto orgulho que tenho pelo que desenvolvi. Criei em meados de maio de 2024 e busco mantê-lo sempre atualizado. Foi meu primeiro portfólio real, desenvolvido utilizando a biblioteca React 95 para trazer essa estética nostálgica da internet antiga. Também inclui diversas interações, como temas personalizados, acesso ao meu currículo e a possibilidade de enviar e-mails diretamente para mim.",
      images: [port1, port2],
      behanceLink: "https://www.behance.net/gallery/205263707/Portfolio-95",
      githubLink: "https://github.com/arthurzop/Portifolio95",
    },
    tcc: {
      title: "TCC - SENAI",
      category: "desenvolvimento front-end",
      year: "2024",
      description:
        "Meu primeiro grande projeto, onde tive a oportunidade de desenvolver uma aplicação completa (design e código) para o Trabalho de Conclusão de Curso do SENAI. Fui responsável por projetar e codificar todo o front-end, implementando funcionalidades e alinhando o desenvolvimento com outras áreas, como banco de dados e back-end. Além disso, atuei como líder do projeto, gerenciando reuniões, prazos de entrega e apresentações.",
      githubLink: "https://github.com/vanguardtech7/TCC",
    },
  };

  const renderImages = (images) => {
    if (images && images.length) {
      return images.map((image, index) => (
        <img key={index} src={image} alt="project picture" />
      ));
    }
    return null;
  };

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
              className="a-container"
            >
              Curriculum
            </a>
            <a
              href="https://www.behance.net/arthurzop"
              target="_blank"
              className="a-container"
            >
              Behance
            </a>
            <a
              href="https://github.com/arthurzop"
              target="_blank"
              className="a-container"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/artur-medeiros-7169b8266/"
              target="_blank"
              className="a-container"
            >
              Linkedin
            </a>
          </nav>

          <div className="menu-toggle">
            <input
              className="check-icon"
              id="check-icon"
              name="check-icon"
              type="checkbox"
              onClick={handleMenu}
              aria-expanded={isOpen}
            />
            <label className="icon-menu" htmlFor="check-icon">
              <div className="bar bar--1"></div>
              <div className="bar bar--2"></div>
              <div className="bar bar--3"></div>
            </label>
          </div>
        </header>

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
              portfolio © 2025
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

            {Object.keys(projectDetails).map((key) => {
              const project = projectDetails[key];
              return (
                <div key={key}>
                  <div className="row" onClick={() => handleClick(key)}>
                    <p>{project.title}</p>
                    <p>{project.category}</p>
                    <p>{project.year}</p>
                  </div>
                  {activeProject === key && (
                    <motion.div
                      className="details-container"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeProject === key ? "auto" : 0,
                        opacity: activeProject === key ? 1 : 0,
                      }}
                    >
                      <p>{project.description}</p>
                      <div className="btn-container">
                        {project.behanceLink && (
                          <a target="_blank" href={project.behanceLink}>
                            <button className="behance">
                              Projeto no Behance
                            </button>
                          </a>
                        )}
                        {project.githubLink && (
                          <a target="_blank" href={project.githubLink}>
                            <button className="github">
                              Projeto no Github
                            </button>
                          </a>
                        )}
                      </div>
                      <div className="img-container">
                        {renderImages(project.images)}
                      </div>
                    </motion.div>
                  )}

                  <div className="divider" id="target"></div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="credits-container">
          <p>
            Made primarily for testing. Heavily inspired by
            <a
              href="https://www.olivierlarose.com"
              className="a-container"
              target="_blank"
            >
              Olivier Larose's Portfolio
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
