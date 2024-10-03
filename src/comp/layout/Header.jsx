
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const form = () => {
    navigate('/Create');
    alert("vh");
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="logo" to="/">
          <img className="navbar-brand mx-5 mt-2" src="public/img/logo-no-background.png" alt="Logo" style={{ width: "150px" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#10375C" }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" style={{ color: "#10375C" }}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={{ color: "#10375C" }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs" style={{ color: "#10375C" }}>Blogs</Link>
            </li>
          </ul>
          <button className="btn btn-outline-dark justify-content-end">
            <Link className="nav-link ms-auto hover-login" to="/Create">Writer...</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
