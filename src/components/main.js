import React from 'react';

// Components
import HowItWorks from './common/HowItWorks';
import Landing from './main/Landing';

const Main = () => {
  return ( 
    <div className="m-5">
      <Landing/>
      <HowItWorks/>
    </div>
   );
}
 
export default Main;