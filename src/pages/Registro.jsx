import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import '../css/FormularioRegistro.css';
import '../css/form.css'
import imgRegistro from '../assets/registrarse/img-registrarse.png';
import API from "../config/api";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    contraseña2: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const { nombre, apellido, email, contraseña, contraseña2 } = formData;

    // Validaciones básicas
    if (!nombre || !apellido || !email || !contraseña || !contraseña2) {
      Swal.fire('Campos incompletos', 'Por favor complete todos los campos', 'warning');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire('Correo inválido', 'Ingrese un correo válido (ejemplo@correo.com)', 'error');
      return;
    }

    if (contraseña.length < 6) {
      Swal.fire('Contraseña débil', 'La contraseña debe tener al menos 6 caracteres', 'error');
      return;
    }

    if (contraseña !== contraseña2) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return;
    }

    try {
      // Petición al backend NestJS
      const response = await fetch(`${API}/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: `${nombre} ${apellido}`,
          email,
          password: contraseña,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Error al registrar usuario');
      }

      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Ahora puedes iniciar sesión',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="registro-contenedor">
      <div className="registrarse">
        <div className="registrarse-inputs">
          <div className="circle-contenedor">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <h2>Registrate</h2>
          </div>

          <form className="inputGroup" onSubmit={(e) => e.preventDefault()}>
            <div className="inputBox">
              <input id="nombre" type="text" value={formData.nombre} onChange={handleChange} required />
              <label>Nombre/s</label>
            </div>
            <div className="inputBox">
              <input id="apellido" type="text" value={formData.apellido} onChange={handleChange} required />
              <label>Apellido/s</label>
            </div>
            <div className="inputBox">
              <input id="email" type="email" value={formData.email} onChange={handleChange} required />
              <label>Correo electrónico</label>
            </div>
            <div className="inputBox">
              <input id="contraseña" type="password" value={formData.contraseña} onChange={handleChange} required />
              <label>Contraseña</label>
            </div>
            <div className="inputBox">
              <input id="contraseña2" type="password" value={formData.contraseña2} onChange={handleChange} required />
              <label>Confirmar contraseña</label>
            </div>

            <div className="btn-registrarse-contenedor">
              <button type="button" onClick={handleSubmit}>Registrarse</button>
            </div>
          </form>

          <div className="a-iniciar-contenedor">
            <a href="/">‹ Volver a inicio</a>
            <Link className="a-iniciar" to="/login">Ya tengo cuenta ›</Link>
          </div>
        </div>

        <div className="img-registrarse-contenedor">
          <img src={imgRegistro} alt="Registro" />
        </div>
      </div>
    </div>
  );
};

export default Registro;
