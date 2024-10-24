import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="home-page" style={{ backgroundColor: 'aqua', height: '100vh', display: 'flex' }}>
      {/* Contenedor izquierdo */}
      <div className="left-container">
        <h2 className="text-white d-flex align-items-center">
          Crea tu primera lista <span className="ms-2">+</span>
        </h2>
        <p className="text-white">Es muy fácil, te echaremos una mano.</p>
        <button className="btn btn-primary mb-3">Crear Lista</button>

        <div className="podcast-section">
          <h3 className="text-white">Encuentra podcasts que quieras seguir</h3>
          <p className="text-white">Te avisaremos cuando salgan nuevos episodios.</p>
          <button className="btn btn-secondary">Explorar Podcasts</button>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-info" onClick={handleModalToggle}>
            Cambiar Idioma
          </button>
        </div>

        {/* Modal de selección de idioma */}
        {showModal && (
          <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Selecciona un Idioma</h5>
                  <button type="button" className="close" onClick={handleModalToggle}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ color: 'black' }}>Español</li>
                    <li style={{ color: 'black' }}>Inglés</li>
                    <li style={{ color: 'black' }}>Francés</li>
                    <li style={{ color: 'black' }}>Alemán</li>
                    <li style={{ color: 'black' }}>Italiano</li>
                    <li style={{ color: 'black' }}>Portugués</li>
                    {/* Agrega más idiomas aquí */}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleModalToggle}>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="main-content" style={{ flex: 1 }}>
        <header className="d-flex justify-content-between align-items-center p-3">
          <div className="logo d-flex align-items-center">
            <img
              src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729527455/icono_spotify_jwxw9i.png"
              alt="Spotify Logo"
              className="spotify-logo"
            />
            <h1 className="ms-2">Kodigo Music</h1>
          </div>
          <div className="search-bar d-flex align-items-center">
            <img
              src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729529516/iconInicio_v6e3la.png"
              alt="Icono de inicio de sesión"
              className="login-icon me-2"
            />
            <input type="text" className="form-control" placeholder="¿Qué desea reproducir?" />
            <i className="fas fa-search search-icon"></i>
          </div>
          <div className="auth-links">
            <Link to="/register" className="btn btn-outline-dark">Registrarse</Link>
            <Link to="/login" className="btn btn-outline-dark ms-2">Iniciar sesión</Link>
          </div>
        </header>
        <div className="content">
          <h1 className='title-center'>Bienvenido a Kodigo Music</h1>
          <h2 className='title-center'>Explora tus canciones favoritas y descubre nuevas playlists.</h2>
          <div className="musician-images">
            <h3 className='left-align'>Famosos Músicos</h3>
            <div className="musician-gallery">
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729530118/BadBunny_xxqepu.png" alt="Músico 1" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729526183/karol_u14pvm.png" alt="Músico 2" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729526159/feid_zpptqg.png" alt="Músico 3" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729526933/Maluma_czcw8a.png" alt="Músico 4" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729526952/Rauw_i8tnsy.png" alt="Músico 5" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729526980/Daddy_Yankee_ae6oyk.png" alt="Músico 6" className="musician" />
            </div>
            <h3 className='left-align'>Álbumes populares</h3>
            <div className="musician-gallery second-gallery">
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729530363/un_verano_sin_ti_BadBunny_lvsfgd.png" alt="Bad Bunny" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729530533/nadie_sabe_lo_que_va_apasarBadBunny_vtu99x.png" alt="Bad Bunny" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729530794/feid_enjo83.png" alt="Feid" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729530853/romeo_osqxmo.png" alt="Romeo Santos" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729530988/ma%C3%B1ana_serabonito_bh2esm.png" alt="Karol" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729531051/primersaMusa_i6xubm.png" alt="Omar courts" className="musician" />
            </div>
            <h3 className='left-align'>Emisoras populares</h3>
            <div className="musician-gallery third-gallery">
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729533088/mana_svqpso.png" alt="radio" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729533213/temerarios_qztwm3.png" alt="radio los temerarios" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729533304/cariLeon_ews5qo.png" alt="radio CariLeon" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729533382/radioKarol_ohj0e3.png" alt="radio Karol" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729533469/Aventura_gz4raw.png" alt="radio aventura" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729533576/radio_feed_ecokon.png" alt="radio feed" className="musician" />
            </div>
            <h3 className='left-align'>Listas seleccionadas</h3>
            <div className="musician-gallery fourth-gallery">
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729651610/list3_csrfxp.png" alt="top 50" className="musician" alt="listas de exitos" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729651234/list2_opmr1o.png" alt="listas globales" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729651610/list3_csrfxp.png" alt="top 50" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729651742/list4_zvfidt.png" alt="top 50" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729651866/list5_g4u1oq.png" alt="viral 50" className="musician" />
              <img src="https://res.cloudinary.com/dsrkdnu5y/image/upload/v1729651972/list6_l0svqm.png" alt="viral 50" className="musician" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
