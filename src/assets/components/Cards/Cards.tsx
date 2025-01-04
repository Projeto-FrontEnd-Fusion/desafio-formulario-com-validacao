import React from "react";
// IMPORT ICONS
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
// IMPORT CSS
import "./Cards.css";

function Cards() {

  // FUNÇÃO PARA EXIBIR UMA MENSAGEM AO CLCIAR NOS CARDS
function mensagem(){
  alert('Em desenvolvimento!')
}


  const items = [
    {
      id: 1,
      image: <IoDocumentAttachOutline className="icon" />,
      title: "Relatórios e Documentos",
    },
    {
      id: 2,
      image: <FaComments className="icon" />,
      title: "Interações e Feedback",
    },
    {
      id: 3,
      image: <FaPeopleGroup className="icon" />,
      title: "Gestão de Equipes",
    },
    {
      id: 4,
      image: <GrProjects className="icon" />,
      title: "Análise de Projetos",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="card_list">
          <a href="" onClick={mensagem} >
            {item.image ? (
              item.image
            ) : (
              <img src={item.image} alt={item.title} />
            )}
            <h4>{item.title}</h4>
          </a>
        </div>
      ))}
    </>
  );
}

export default Cards;
