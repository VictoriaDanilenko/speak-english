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
  
export default Navi;  