import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import Api from "../../services/api";

import './styles.css';


function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    Api.get('/connections').then(res => {
      setTotalConnections(res.data.total);
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <div className="logo-container">
          <img src={logoImg} alt="Nutrição" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingImg}
          alt="plataforma de consultas online"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/profiles" className='study'>
            <img src={studyIcon} alt="Agendar" />
            Agendar
          </Link>
          <Link to="/profile/register" className='give-classes'>
            <img src={giveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          {totalConnections > 0 ? `Total de ${totalConnections} consultas já realizadas` : 'Seja o primeiro a se conectar'}
          <img
            src={purpleHeartIcon}
            alt="Coração Roxo"
          />
        </span>
      </div>
    </div>
  );
}

export default Landing;
