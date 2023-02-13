import './header.scss';

export function Header() {
  return (
    <header className="header">
      <a href="Home">
        <img
          className="header__MainLogo"
          src="./img/logo2-transparent.png"
          alt=""
        ></img>
      </a>
      <h1>Beer's City</h1>
      <a href="">
        <img
          className="header__burger"
          src="./img/burger-menu.png"
          alt=""
        ></img>
      </a>
    </header>
  );
}
