import React from 'react';

function Login() {
  return (
    <div className="login-page" style={{ backgroundColor: '	#7FFFD4', height: '100vh', color: 'white' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <div className="card p-4" style={{ width: '400px', backgroundColor: '#F0FFF0' }}>
          <h3 className="text-center mb-4">Iniciar sesión</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-control"
              placeholder='Ingrese su correo electronico'
               required />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control"
              placeholder='Ingresa tu contraseña'
              required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
