import React from 'react';

// Material UI Icons
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

// Images
import tng from '../../images/tng-logo.png';

const Footer = () => {

  const changePage = (e) => {
    e.preventDefault();

    window.location.href = '/maintenance';
  }


  return ( 
    <div className="footer">
      <div className="container d-flex flex-row justify-content-between align-items-center footer-links pt-4">
        <div className="footer-section">
          <img className="footer-header" src={tng} alt="logo" width="95px"/>
          <div className="footer-content">
            <p>Mexico City</p>
            <p>contact@tngsolution.com</p>
            <p>(+52) 56 1151 7829</p>
            <a href="tngsolution.com" className="link border-animation">
              <div className="border-animation-inner">
                www.tngsolution.com
              </div> 
            </a>
          </div>
        </div>
        <div className="footer-section">
          <span className="footer-header"><strong>¿Quiénes somos?</strong></span>
          <div className="footer-content">
            <a href="true" onClick={changePage}>Nosotros</a>
            <a href="true" onClick={changePage}>Antes de que te vayas</a>
            <a href="true" onClick={changePage}>FAQ</a>
          </div>
        </div>
        <div className="footer-section">
          <span className="footer-header"><strong>Legal</strong></span>
          <div className="footer-content">
            <a href="true" onClick={changePage}>Términos y condiciones</a>
            <a href="true" onClick={changePage}>Aviso de arivacidad</a>
            <a href="true" onClick={changePage}>Aviso de cookies</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container d-flex justify-content-between align-items-center in h-100">
          <p className="my-0">&copy; { new Date().getFullYear() } TNG Solution. All Rights Reserved.</p>
          <div className="d-flex justify-content-center">
            <Facebook className="mr-1 social-media"/>
            <Instagram className="mx-1 social-media"/>
            <Twitter className="ml-1 social-media"/>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;