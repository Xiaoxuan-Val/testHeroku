/**
 * User SignUp/LogIn Page
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Xiaoxuan Li - ID: 933206, Sep 4, 2019
 **/
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import axios from 'axios';

class User extends Component {
    constructor(props){
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeFamilyName = this.onChangeFamilyName.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeDOB = this.onChangeDOB.bind(this);
      this.onChangeLocation = this.onChangeLocation.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeDateJoined = this.onChangeDateJoined.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state ={
        name:'',
        familyName:'',
        username:'',
        email:'',
        dob:'',
        location:'',
        password:'',
        dateJoined:''
      }
    }

    onChangeName(e){
      this.setState({
        name: e.target.value
      });
    }
    onChangeFamilyName(e){
      this.setState({
        familyName: e.target.value
      });
    }
    onChangeUsername(e){
      this.setState({
        username: e.target.value
      });
    }
    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }
    onChangeDOB(e){
      this.setState({
        dob: e.target.value
      });
    }
    onChangeLocation(e){
      this.setState({
        location: e.target.value
      });
    }
    onChangePassword(e){
      this.setState({
        password: e.target.value
      });
    }
    onChangeDateJoined(e){
      this.setState({
        dateJoined: e.target.value
      });
    }


    onSubmit(e){
      e.preventDefault();

      const newUser = {
        name: this.state.name,
        familyName: this.state.familyName,
        username: this.state.username,
        email: this.state.email,
        dob: this.state.dob,
        location: this.state.location,
        password: this.state.password,
        dateJoined: this.state.dateJoined
      }

     axios.post('http://localhost:6100/user/add', newUser)
      .then(res => console.log(res.data));

     window.location='/';//go back to homepage
    }



    render(){
        return(
          <div>
            <form onSubmit={this.onSubmit} className="create-user-form">
              <div className="form-group">
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group">
                <label>Family Name: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.familyName}
                    onChange={this.onChangeFamilyName}
                    />
              </div>
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
                <label>Email: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
              </div>
              <div className="form-group">
                <label>DOB: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.dob}
                    onChange={this.onChangeDOB}
                    />
              </div>
              <div className="form-group">
                <label>Location: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create New Account" className="btn btn-outline-info" />
              </div>
            </form>
          </div>
        );
    }
}

export default User;
