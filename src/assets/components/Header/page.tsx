import React from "react";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaCogs, FaSignOutAlt, FaFileAlt } from "react-icons/fa"; 
import { IoDocumentsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavBar() {
  return (
   <>
    <section className="header">
      <div className="logo__">
        <img src="/img/logo.webp" alt="Logo" />
      </div>

      <ul className="ul_nav_bar">
        <li>
          <Link to="/"><FaTachometerAlt /> Painel</Link> 
        </li>
        <li>
          <Link to="/cadastro"><FaUserPlus /> Cadastro de Membro</Link>
        </li>
        <li>
          <Link to="/contas"><FaUsers /> Contas</Link>
        </li>
        <li>
          <Link to="/servicos"><FaFileAlt /> Serviços</Link> 
        </li>
        <li>
          <Link to="/relatorios"><IoDocumentsSharp /> Relatórios</Link> 
        </li>
        <li>
          <Link to="/suporte"><FaUsers /> Suporte</Link> 
        </li>
      </ul>

      <div className="rodape_settings">
        <li>
          <Link to="/configuracoes"><FaCogs /> Configurações</Link>
        </li>
        <li>
          <Link to="/sair"><FaSignOutAlt /> Sair</Link> 
        </li>
      </div>
    </section>
  
   </>
  );
}

export default NavBar;
