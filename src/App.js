import React from 'react';

// Packages
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Navbar from './components/main/Navbar';
import Landing from './components/main/Landing';
import Btc from './components/components/Btc';

// Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar/>

        <div>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/bitcoin_price" component={Btc}/>
          </Switch>
        </div>

        {/* TODO: make footer */}
      </Provider>
    </Router>
  );
}

export default App;
