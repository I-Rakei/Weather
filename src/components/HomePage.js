import React from 'react';
import './HomePage.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <h1>Pagina Inicial</h1>
      <p>
        Esse é o meu resultado da avaliação SUM III do módulo Aceder a dados e serviços em aplicações web com 
        programação do lado do servidor.
      </p>
      <button className="btn btn-primary" onClick={() => window.location.href = '/page1'}>Ver o TEMPO</button>
    </div>
  );
}

export default HomePage;
