import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <h1>Pagina Inicial</h1>
      <p>
        Esse é o meu resultado da avaliação SUM III do módulo Aceder a dados e serviços em aplicações web com 
        programação do lado do servidor.
      </p>
      <Link to="/page1" className="btn btn-primary">
        Ver o TEMPO
      </Link>
    </div>
  );
}

export default HomePage;
