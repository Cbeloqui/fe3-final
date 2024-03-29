import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
const navigate = useNavigate();
  
return (
  <footer>
    <button onClick={() => navigate(-1)}>🔙</button>
    <p>Powered by</p>
    <img src="./images/DH.png" alt="DH-logo" className="logo" />
  </footer>
);
};

export default Footer;
