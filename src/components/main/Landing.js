import React from 'react';

// Packages
import { motion } from 'framer-motion';

// Images
import landing from '../../images/landing-img.svg';

const Landing = () => {
  const goToBtc = (e) => {
    e.preventDefault();
    window.location.href = '/bitcoin_price';
  }

  return ( 
    <div className="row align-items-center vh-100">
      <motion.div className="col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.3 }}
      >
        <h3 className="font-weight-normal">Recibe alertas</h3>
        <h1 className="font-weight-bold" style={{fontSize: "75px"}}>Seguras y confiables</h1>
        <br/>
        <h5 className="font-weight-normal">Conocerás el tiempo indicado para saber cuando vender o comprar bitcoin.</h5>
        <br/><br/><br/>
        <motion.button className="btn d-inline rounded-pill" id="start_button" onClick={goToBtc}
          whileHover={{ scale: 1.1 }}
        >
          Comenzar &#8594;
        </motion.button>
      </motion.div>
      <motion.div className="col"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.3 }}
      >
        <img src={landing} alt="btc-alerts" height="550"/>
      </motion.div>
    </div>
   );
}
 
export default Landing;