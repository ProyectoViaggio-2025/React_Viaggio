import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/FormularioRegistro.css';
import imgRegistro from '../assets/registrarse/img-registrarse.png';


const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    contraseña2: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const { nombre, apellido, email, contraseña, contraseña2 } = formData;

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

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const existe = usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (existe) {
      Swal.fire('Correo en uso', 'El correo ya está registrado', 'error');
      return;
    }

    usuarios.push({ nombre, apellido, email, contraseña });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Ahora puedes iniciar sesión',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <div className="registrarse">
      <div className="registrarse-inputs">
        <div className="circle-contenedor">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
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
          <a className="a-iniciar" href="/login">Ya tengo cuenta ›</a>
        </div>
      </div>

      <div className="img-registrarse-contenedor">
        <img src={imgRegistro} alt="Registro" />
      </div>
    </div>
  );
};

export default FormularioRegistro;
