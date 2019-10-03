import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom" ;
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import NavibarWithSearch from './NavibarWithSearch';
import ArtifactList from './ArtifactList';
import User from "./User";

class Home extends Component {
    render(){
        return(
          <Router>
            <NavibarWithSearch />
            <Route path="/" exact component={ArtifactList} />
            <Route path="/SignUp" component={User} />
          </Router>
        );
    }
}

export default Home;
//<Route path="/" exact component = { UserPage } />
