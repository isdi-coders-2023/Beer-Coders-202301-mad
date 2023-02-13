import './footer.scss';
export function Footer() {
  return (
    <footer className="container__footer">
      <div>
        <div className="footer-title">
          {' '}
          <img
            src="./img/logo2-transparent.png"
            alt="logo"
            height="30px"
            width="40px"
          />
          Beers City
          <p className="title-small">
            Copyright © Beers City 2020 All rights reserved
          </p>
        </div>
      </div>
      <ul>
        <li className="small-menu">Contac Info</li>
        <li className="menu-list">+123 456 789</li>
        <li className="menu-list">Info@BeersCity.com</li>
        <li className="menu-list">1245, Madrid, Spain</li>
      </ul>
      <div className="qlq" />

      <p className="small-menu">Follow us on</p>

      <div className="list-logo" />
      <img
        src="./img/facebook-green.png"
        alt="facebook"
        width="30px"
        height="30px"
      />
      <img
        src="./img/instagram-green.png"
        alt="instagram"
        width="30px"
        height="30px"
      />
      <img
        src="./img/twitter-green.png"
        alt="Twitter"
        width="30px"
        height="30px"
      />
    </footer>
  );
}
