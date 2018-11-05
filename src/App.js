import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav/Nav';
import {Link} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="background">

        

        
            <div>
              <Nav />
            </div>
        
           {routes}
          <div className="loginStyle">
          <Link to="/user"> Login </Link>
          </div>

       
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
