import React, { useEffect, useState } from "react";

// IMPORT CSS
import "./Home.css";
import Cards from "../../assets/components/Cards/Cards";
import CardsDashboard from "../../assets/components/Cards_dashboard/Cards_Dashboard";
import ChartComponent from "../../assets/components/ChartComponent/ChartComponent";

function Home() {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    // Recupera os membros do Local Storage
    const storedMembers = JSON.parse(localStorage.getItem("members") || "[]");
    // Atualiza o estado com a quantidade de membros
    setMemberCount(storedMembers.length);
  }, []); // Executa apenas ao montar o componente

  return (
    <>
      <section className="container_home" >
        {/* title_dashboard */}
        <main className="container_dashboard">
          <div className="title_dashboard">
            <h1>Painel de Gestão</h1>
            <span>Monitoramento e controle ao seu alcance.</span>
            {/* Exibe a quantidade de membros */}
            <h4 className="qtd_membros">
              Qtd Membros: <span>{memberCount}</span>
            </h4>
          </div>
          {/* cards */}
          <div className="container_cards">
            <Cards />
          </div>
          {/* cards 2 dash bord */}
          <div className="cards_dashboard">
            <CardsDashboard />
          </div>
          
        </main>
      </section>
      {/* NavDevice */}
    </>
  );
}

export default Home;
