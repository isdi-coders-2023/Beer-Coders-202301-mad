/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.scss';

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <a href="Home">
        <img
          className="header__MainLogo"
          src="./img/logo2-transparent.png"
          alt=""
        />
      </a>
      <h1>Beer's City</h1>
      {children}
    </header>
  );
}
