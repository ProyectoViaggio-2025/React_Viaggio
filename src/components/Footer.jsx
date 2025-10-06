import "../css/footer.css";
import logo from "../assets/home/logo.svg";
import facebook from "../assets/home/facebook.png";
import twitter from "../assets/home/twitter.png";
import instagram from "../assets/home/instagram.png";

export default function Footer() {
  return (
    <footer>
      <div className="divSucursales">
        <p>Sucursales</p>
        <p>Calle inventada 1234</p>
        <p>Calle alternativa 5679</p>
      </div>
      <div>
        <img src={logo} alt="Logo" className="logoFooter" />
      </div>
      <div className="divRedes">
        <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
          <img src={facebook} alt="Facebook" className="logosRedes" />
        </a>
        <a href="https://x.com/" target="_blank">
          <img src={twitter} alt="Twitter" className="logosRedes" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="Instagram" className="logosRedes" />
        </a>
      </div>
    </footer>
  );
}
