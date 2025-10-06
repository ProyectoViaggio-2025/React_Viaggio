    import "./actividades.css"
    
    // src/components/Footer.jsx
    export default function Footer() {
    return (
        <footer>
        <div>
            <img src="/src/assets/Imagenes/home/logo.svg" alt="Logo" className="logoFooter" />
        </div>
        <div className="divSucursales">
            <p>
            <strong>Sucursales</strong>
            </p>
            <p>Calle inventada 1234</p>
            <p>Calle alternativa 5679</p>
        </div>
        <div className="divHorarios">
            <p className="horarios">
            <strong>Horarios de atención:</strong>
            </p>
            <p>Lunes a sábados</p>
            <p>8:00 a 20:00hs</p>
        </div>
        <div className="divRedes">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Imagenes/home/facebook.png" alt="Facebook" className="logosRedes" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Imagenes/home/twitter.png" alt="Twitter" className="logosRedes" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Imagenes/home/instagram.png" alt="Instagram" className="logosRedes" />
            </a>
        </div>
        </footer>
    );
    }
