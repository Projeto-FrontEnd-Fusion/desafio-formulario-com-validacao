import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserPlus,
  FaUsers,
  FaCogs,
  FaSignOutAlt,
  FaFileAlt,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  // Função para alternar o menu
  const abrirMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* Header com classe 'open' para exibição condicional */}
      <section className={`header ${openMenu ? "open" : ""}`}>
        <div className="logo__">
          <img src="/img/logo.webp" alt="Logo" />
        </div>

        {/* Botão para abrir e fechar o menu */}
        <IoIosArrowForward
          className={`arrow_menu ${openMenu ? "open" : ""}`}
          onClick={abrirMenu}
        />

        {/* Lista de navegação */}
        <ul className="ul_nav_bar">
          <li>
            <Link to="/">
              <FaTachometerAlt /> Painel
            </Link>
          </li>
          <li>
            <Link to="/cadastro">
              <FaUserPlus /> Cadastro de Membro
            </Link>
          </li>
          <li>
            <Link to="/contas">
              <FaUsers /> Contas
            </Link>
          </li>
          <li>
            <Link to="/servicos">
              <FaFileAlt /> Serviços
            </Link>
          </li>
          <li>
            <Link to="/relatorios">
              <IoDocumentsSharp /> Relatórios
            </Link>
          </li>
          <li>
            <Link to="/suporte">
              <FaUsers /> Suporte
            </Link>
          </li>
        </ul>

        {/* Rodapé com links de configurações e sair */}
        <div className="rodape_settings">
          <li>
            <Link to="/configuracoes">
              <FaCogs /> Configurações
            </Link>
          </li>
          <li>
            <Link to="/sair">
              <FaSignOutAlt /> Sair
            </Link>
          </li>
        </div>
      </section>
    </>
  );
}

export default NavBar;
