import React from 'react';
import { Facebook, Twitter, Instagram } from '@material-ui/icons'
import tng from '../../images/tng-logo.png';

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="container d-flex flex-row justify-content-between align-items-center footer-links pt-4">
        <div className="footer-section">
          <img className="footer-header" src={tng} alt="logo" width="95px"/>
          <div className="footer-content">
            <p>Mexico City</p>
            <p>contact@tngsolution.com</p>
            <p>(+52) 56 1151 7829</p>
            <a id="link" href="tngsolution.com" className="link border-animation">
              <div className="border-animation-inner">
                www.tngsolution.com
              </div> 
            </a>
          </div>
        </div>
        <div className="footer-section">
          <span className="footer-header"><strong>¿Quiénes somos?</strong></span>
          <div className="footer-content">
            <a id="link" href="true" onClick={e=>e.preventDefault()}>Nosotros</a> <br/>
            <a id="link" href="true" onClick={e=>e.preventDefault()}>Antes de que te vayas</a> <br/>
            <a id="link" href="true" onClick={e=>e.preventDefault()}>FAQ</a>
          </div>
        </div>
        <div className="footer-section">
          <span className="footer-header"><strong>Legal</strong></span>
          <div className="footer-content">
            <a id="link" href="true" onClick={e=>e.preventDefault()}>Términos y condiciones</a> <br/>
            <a id="link" href="true" onClick={e=>e.preventDefault()}>Aviso de arivacidad</a> <br/>
            <a id="link" href="true" onClick={e=>e.preventDefault()}>Aviso de cookies</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container d-flex justify-content-between align-items-center in h-100">
          <p className="my-0">&copy; { new Date().getFullYear() } TNG Solution. All Rights Reserved.</p>
          <div className="d-flex justify-content-center">
            <Facebook className="mr-1 social-media"/>
            <Instagram className="mx-1 social-media"/>
            <Twitter  className="ml-1 social-media"/>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;