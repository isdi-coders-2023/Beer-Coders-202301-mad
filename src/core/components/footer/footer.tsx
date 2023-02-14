import './footer.scss';
export function Footer() {
  return (
    <footer className="container__footer">
      <div className="footer-title">
        {' '}
        <div>
          <img
            src="./img/logo2-transparent.png"
            alt="logo"
            height="30px"
            width="40px"
          />
          Beers City
        </div>
        <div></div>
        <p className="title-small">
          Copyright © Beers City 2020 All rights reserved
        </p>
      </div>

      <div className="small-menu">
        <span>Contact Info</span>
        <span>+123 456 789</span>
        <span>Info@BeersCity.com</span>
        <span>1245, Madrid, Spain</span>
      </div>

      <div className="small-menu">
        <p>Follow us on</p>
      </div>
      <div className="list-logo">
        <img
          src="./img/facebook-green.png"
          alt="facebook"
          width="15px"
          height="30px"
        />
        <img
          src="./img/instagram-green.png"
          alt="instagram"
          width="15px"
          height="30px"
        />
        <img
          src="./img/twitter-green.png"
          alt="Twitter"
          width="15px"
          height="30px"
        />
      </div>
    </footer>
  );
}
