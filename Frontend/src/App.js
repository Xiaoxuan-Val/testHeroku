import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/Home';

import { Provider } from 'react-redux';
import store from './store';

import HeirloomForm from "./components/HeirloomForm"
import ModalForm from "./components/Modalform"


class App extends Component {
    render(){
        return(
          <Provider store={store}>
            <div className="App">
                <Home />
            </div>
          </Provider>
        );
    }
}
export default App;

//import Profile from './components/Profile';
