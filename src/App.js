import React from 'react';

// Packages
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Navbar from './components/main/Navbar';
import Main from './components/main';
import Btc from './components/common/Btc';
import Footer from './components/main/Footer';

// Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar/>

        <div className="m-5">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/bitcoin_price" component={Btc}/>
          </Switch>
        </div>

        <Footer/>
      </Provider>
    </Router>
  );
}

export default App;
