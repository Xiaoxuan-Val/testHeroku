/**
 * User Modal pop up
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Xiaoxuan Li - ID: 933206, Sep 21, 2019
 **/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {User} from './User';

export class UserModal extends Component{

  constructor(props){
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      username:'',
      password:'',
    }
  }


  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

  }

  render(){
     return(
       <Modal
      {...this.props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                  type="password"
                  required
                  className="form-control"
                  id="InputPassword"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="form-group">
          <input type="submit" onClick={this.props.onHide} value="Log in" className="btn btn-outline-info" style={{backgroundColor:"#93c6c8", color:"white"}}/>
        </div>
        <div className="form-group">
        <NavLink to="/SignUp" onClick={this.props.onHide} className="btn btn-light">Sign Up</NavLink>
        </div>

      </Modal.Footer>
    </Modal>
     )
  }
}
