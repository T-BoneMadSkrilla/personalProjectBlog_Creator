import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="background">

        

        
            <div>
              
          <div className="loginStyle">
          <a href="process.env.REACT_APP_LOGIN">Login</a>
          </div>
            </div>
           {routes}
        

       
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
