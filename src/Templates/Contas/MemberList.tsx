import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { FaUser } from "react-icons/fa6";
import { setMembers } from "../../Redux/Slices/memberSlice"; // Importação para controlar o estado
// import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Members.css";

const MemberList = () => {
  const dispatch = useDispatch();
  const members = useSelector((state: RootState) => state.member.members);

  // Carregar membros do Local Storage ao montar o componente
  useEffect(() => {
    const storedMembers = localStorage.getItem("members");
    if (storedMembers) {
      dispatch(setMembers(JSON.parse(storedMembers))); // Atualizar o estado com os dados do Local Storage
    }
  }, [dispatch]);

  // Verifica se há membros e exibe uma mensagem caso não tenha
  if (members.length === 0) {
    return (
      <main className="container_menbers" data-aos="fade-left" data-aos-duration="1500">
        <h1 className="text-2xl font-bold mb-4">Lista de Membros</h1>
        <p>Nenhum membro encontrado.</p>
      </main>
    );
  }

  return (
    <div className="list_menbers" data-aos="fade-left" data-aos-duration="1500">
      <h1 className="title_menbers">Lista de Membros</h1>
      <ul className="ul_menbers">
        {members.map((member, index) => (
          <li key={member.id || index} className="list_user">
            <div className="name_user">
              <FaUser className="icon_menbers" />
              <p>{member.nome}</p>
            </div>

            <h5>Email: {member.email}</h5>
            <h5>Telefone: {member.telefone}</h5> {/* Exibindo o telefone */}
            <h5>Cargo: {member.cargo}</h5>
            {member.linkedin && (
              <h5>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <FaLinkedin/>  LinkedIn
                </a>
              </h5>
            )}
            {member.github && (
              <h5>
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                 <FaGithub/> GitHub
                </a>
              </h5>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
