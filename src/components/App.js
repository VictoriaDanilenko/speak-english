import React from 'react';
import "./App.css";
import "../index";

const App = () => {
  return (
    <div>
      <Navi />
      <Hero />
      <Experience />
    </div>);
}

const Navi = () => {
  return (
    <div className="container">
      <div className="hero">
        <nav>
          <ul className="list">
            <li>
              <a href="/">Обо мне</a>
            </li>
            <li>
              <a href="/">Тарифы</a>
            </li>
            <li>
              <a href="/">Отзывы</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <svg height="60" width="60">
              <use href="/images/sprite.svg#mail"></use>
            </svg>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

const Hero = () => {
    return (<div>
      <p><h1>Английский язык для школьников</h1>
        <h2>Получи базу знаний для сдачи экзаменов</h2></p>
      <a href="tel:12345678">Позвонить</a>
    </div>);
};
  
const Experience = () => {
  return (
    <div>
      <h2>Почему ваш ребенок должен 
        учится у нас</h2>
      <ul>
        <li>Преподаватель с опытом работы с детьми в школах и детских садах</li>
        <li>Составление индивидуальной программы занятий для каждого ребенка</li>
        <li>Прохождение занятий в интерактивном и игровом формате</li>
      </ul>

  </div>

  );
}



export default App;  