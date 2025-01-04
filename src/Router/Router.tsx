import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Templates/Home/page";
import Cadastro from "../Templates/Form/Form";
// Outras páginas
import Contas from "../Templates/Contas/MemberList";
import Servicos from "../Templates/Services/page";

import Relatorios from "../Templates/Relatorios/page";
// import Suporte from "../Templates/Suporte/page";
// import Configuracoes from "../Templates/Configuracoes/page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      /* <Route path="/contas" element={<Contas />} />

       <Route path="/servicos" element={<Servicos />} />
       <Route path="/relatorios" element={<Relatorios />} />
      {/* <Route path="/suporte" element={<Suporte />} />
      <Route path="/configuracoes" element={<Configuracoes />} />  */}
      <Route path="*" element={<div>404 - Página Não Encontrada</div>} /> 
    </Routes>
  );
};

export default AppRouter;
