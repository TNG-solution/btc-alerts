import React from 'react';

import {Link} from 'react-router-dom';

// Packages
import { motion } from 'framer-motion';

// Images
import btcAlerts from '../../images/logo.png';

const Navbar = () => {
  return ( 
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to={"/"} className="nav-item nav-link">
          <img src={btcAlerts} alt="Btc alerts logo" className="mr-3" height="35"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <motion.a className="nav-item nav-link mr-4" href="/#hworks" whileHover={{ scale: 1.1 }}>Como funciona</motion.a>
            <motion.a className="nav-item nav-link mr-4" href="/bitcoin_price" whileHover={{ scale: 1.1 }}>Comenzar</motion.a>
          </div>
        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;