import React from "react";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaCogs, FaSignOutAlt, FaFileAlt } from "react-icons/fa"; 
import { IoDocumentsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// IMPORT CSS 
import './NavDevice.css'

function NavDevice() {
    return ( 
        <>
        {/* menu device */}
    <section className="header_device">
    <ul className="ul_nav_device">
        <li>
          <Link to="/"><FaTachometerAlt /> </Link> 
        </li>
        <li>
          <Link to="/contas"><FaUsers /> </Link>
        </li>
        <li >
          <Link className="add" to="/cadastro"><FaUserPlus /> </Link>
        </li>
        <li>
          <Link to="/servicos"><FaFileAlt /></Link> 
        </li>
        <li>
          <Link to="/relatorios"><IoDocumentsSharp /> </Link> 
        </li>
        
      </ul>
     
     </section>
        
        
        </>
     );
}

export default NavDevice;