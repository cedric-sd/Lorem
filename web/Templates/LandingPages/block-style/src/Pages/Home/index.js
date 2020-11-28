import React from 'react';

import './styles.css';

const Home = () => {
  return (
    <div className="container">
      <section className="block">
        <header className="header">
          <a href="/">Arquic</a> 
          <nav>
            <ul className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/js/">JavaScript</a></li>
              <li><a href="/python/">Python</a></li>
            </ul>
          </nav>
        </header>
        <div>
          <h1>Um título sobre a pagina</h1>
          <p>Uma legenda mais descritiva para nos contar do que se trata o site.</p>
          <input></input>
        </div>
      </section>

      <section>
        <h3>10.000+</h3>
        <p>usuarios</p>

        <ul>
          <li>imagem 1</li>
          <li>imagem 2</li>
          <li>imagem 3</li>
        </ul>
      </section>

      <section>
        <h2>Veja alguns benefícios</h2>
        
      </section>

    </div>
  );
};

export default Home;
