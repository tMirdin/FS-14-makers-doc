import React from "react";
import mac from "../../assets/Mac_Studio.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-text" id="header-go">
          <h1>
            Добро пожаловать! <br />
            на нашем сайте вы можете ознакомиться <br />с основными темами "Java
            Script"
          </h1>
          <button id="header-btn">Начать сейчас</button>
          <p>
            JavaScript это язык, который позволяет вам применять сложные вещи
            <br />
            на web странице — каждый раз, когда на web странице происходит
            что-то
            <br />
            большее, чем просто её статичное отображение — отображение <br />
            периодически обновляемого контента, или интерактивных карт, <br />
            или анимация 2D/3D графики — можете быть уверены, что скорее всего,
            не
            <br />
            обошлось без JavaScript.
          </p>
        </div>
        <div className="header-mac">
          <img id="mac" src={mac} alt="BG2" />
        </div>
      </div>
    </>
  );
};

export default Home;
