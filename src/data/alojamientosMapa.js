import riyak from "../assets/alojamientos/PortadasHoteles/Riyak.png";
import argentino from "../assets/alojamientos/PortadasHoteles/Argentino.png";
import josefina from "../assets/alojamientos/PortadasHoteles/Casa_Josefina.png";
import centenario from "../assets/alojamientos/PortadasHoteles/Centenario.png";
import demetrio from "../assets/alojamientos/PortadasHoteles/Demetrio.png";
import santaRosa from "../assets/alojamientos/PortadasHoteles/Santa_Rosa.png";
import rex from "../assets/alojamientos/PortadasHoteles/rex.jpg";
import hotelOlavarria from "../assets/alojamientos/PortadasHoteles/HotelOlavarria.jpg";
import sky from "../assets/alojamientos/PortadasHoteles/skyView.jpg";

const alojamientos = [
    {
        id: 1,
        nombre: "Hotel Argentino",
        coords: [-36.8962744, -60.3158224], // Av Pringles y Dorrego, Olavarría :contentReference[oaicite:1]{index=1}
        imagen: argentino,
        descripcion: "Ubicado en el centro, ideal para viajeros que buscan comodidad y cercanía.",
        link: "/alojamientos/hotel-argentino"
    },
    {
        id: 2,
        nombre: "Casa Josefina",
        coords: [-36.8936562662341, -60.3273791325626], // Aprox (no encontré lat/long exacta pública) – dirección Hornos 2470, Olavarría :contentReference[oaicite:2]{index=2}
        imagen: josefina,
        descripcion: "Alojamiento familiar con encanto local y atención personalizada.",
        link: "/alojamientos/casa-josefina"
    },
    {
        id: 3,
        nombre: "Hotel Centenario",
        coords: [-36.895851, -60.321489], // Gral Paz 3009, Olavarría :contentReference[oaicite:3]{index=3}
        imagen: centenario,
        descripcion: "Elegancia clásica frente a espacios verdes, perfecto para descansar.",
        link: "/alojamientos/hotel-centenario"
    },
    {
        id: 4,
        nombre: "Apart Hotel Demetrio",
        coords: [-36.896416090813766, -60.315983590233444], // Aproximado – ubicación exacta no encontrada
        imagen: demetrio,
        descripcion: "Moderno y funcional, cerca de los principales puntos turísticos.",
        link: "/alojamientos/hotel-demetrio"
    },
    {
        id: 5,
        nombre: "Hotel Riyak",
        coords: [-36.899052297837564, -60.31944753256222], // Aproximado
        imagen: riyak,
        descripcion: "Estilo boutique con diseño contemporáneo y servicios premium.",
        link: "/alojamientos/hotel-riyak"
    },
    {
        id: 6,
        nombre: "Hotel Santa Rosa",
        coords: [-36.892128008136034, -60.3218011902337], // Aproximado
        imagen: santaRosa,
        descripcion: "Ambiente tranquilo y acogedor, ideal para escapadas relajantes.",
        link: "/alojamientos/hotel-santa-rosa"
    },
    {
        id: 7,
        nombre: "Hotel Nuevo Rex",
        coords: [-36.89469948511565, -60.31391930187852], // Aproximado
        imagen: rex,
        descripcion: "Opción económica con excelente ubicación y atención cordial.",
        link: "/alojamientos/hotel-rex"
    },
    {
        id: 8,
        nombre: "Hotel Olavarría",
        coords: [-36.89344618345073, -60.31805957489157], // Aproximado
        imagen: hotelOlavarria,
        descripcion: "Conectado con la historia local, frente al Parque Mitre.",
        link: "/alojamientos/hotel-olavarria"
    },
    {
        id: 9,
        nombre: "Sky View",
        coords: [-36.892878347769475, -60.31990265954958], // Aproximado
        imagen: sky,
        descripcion: "Vistas panorámicas y diseño minimalista para una experiencia única.",
        link: "/alojamientos/sky-view"
    }
];

export default alojamientos;
