import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-page" style={{ backgroundColor: '#98FB98', height: '100vh', color: 'white' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <div className="card p-4" style={{ width: '400px', backgroundColor: '	#AFEEEE' }}>
          <h3 className="text-center mb-4">Regístrate</h3>
          <form>
          <div className="mb-3">
  <label className="form-label">Nombre</label>
  <input
    type="text"
    className="form-control"
    placeholder="Ingresa tu nombre"
    required
    onInvalid={(e) => e.target.setCustomValidity('Por favor, rellena este campo')}
    onInput={(e) => e.target.setCustomValidity('')} // Esto limpia el mensaje si empieza a escribir
  />
</div>
            <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
           <input
           type="email"
            className="form-control"
            placeholder="Ingresa tu correo electrónico"
           required
             />
          </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control"
              placeholder='ingrese una contraseña'
              required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Registrar</button>
          </form>

          <div className="social-login mt-4 text-center">
            <p>O regístrate con:</p>
            <button className="btn btn-light w-100 mb-2">
              <i className="fab fa-google me-2"></i> Registrarse con Google
            </button>
            <button className="btn btn-light w-100 mb-2">
              <i className="fab fa-facebook me-2"></i> Registrarse con Facebook
            </button>
            <button className="btn btn-light w-100 mb-2">
              <i className="fab fa-apple me-2"></i> Registrarse con Apple
            </button>
          </div>

          <p className="text-center mt-3">
            ¿Ya tienes una cuenta? <Link to="/login" className="text-primary">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;