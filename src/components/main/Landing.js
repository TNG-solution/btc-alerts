import React from 'react';

import { Link } from 'react-router-dom';

// Images
import landing from '../../images/landing-img.svg';

const Landing = () => {
  return ( 
    <div className="row align-items-center vh-100">
      <div className="col">
        <h3>Recibe alertas</h3>
        <h1 className="font-weight-bold" style={{fontSize: "75px"}}>Seguras y confiables</h1>
        <br/>
        <h5>Conocerás el tiempo indicado para saber cuando vender o comprar bitcoin.</h5>
        <br/><br/><br/>
        <Link className="btn d-inline rounded-pill" id="start_button" to={"/bitcoin_price"}>
          Comenzar &#8594;
        </Link>
      </div>
      <div className="col">
        <img src={landing} alt="landing"/>
      </div>
    </div>
   );
}
 
export default Landing;