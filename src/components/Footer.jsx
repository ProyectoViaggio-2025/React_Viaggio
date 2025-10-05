function Footer() {
  return (
    <footer>
      <div className="divSucursales">
        <p>Sucursales</p>
        <p>Calle inventada 1234</p>
        <p>Calle alternativa 5679</p>
      </div>
      <div>
        <img src="/Imagenes/home/logo.svg" alt="Logo" className="logoFooter" />
      </div>
      <div className="divRedes">
        <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
          <img src="/Imagenes/home/facebook.png" alt="Facebook" className="logosRedes" />
        </a>
        <a href="https://x.com/" target="_blank">
          <img src="/Imagenes/home/twitter.png" alt="Twitter" className="logosRedes" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/Imagenes/home/instagram.png" alt="Instagram" className="logosRedes" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;