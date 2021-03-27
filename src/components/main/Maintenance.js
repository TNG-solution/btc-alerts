import React from 'react';

// Images
import maintenance from '../../images/main.gif';

const Maintenance = () => {
  return ( 
    <div className="row align-items-center">
      <div className="mt-4 col">
        <h1 className="font-weight-bold" style={{fontSize: "75px"}}>Página en mantenimiento</h1>
        <br/>
        <h5 className="font-weight-normal">
          Diculpe, actualmente estamos trabajando en este momento, vuelva pronto.
        </h5>
        <br/><br/><br/>
      </div>
      <div className="mt-4 col">
        <img src={maintenance} alt="maintenance" height="650"/>
      </div>
    </div>
   );
}
 
export default Maintenance;