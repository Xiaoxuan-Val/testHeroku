import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom" ;
import Navibar from './Navibar';
import deevesh from "./deevesh.jpg";

import UserProfile from 'react-user-profile'

class Profile extends Component {
  render() {
    const photo = deevesh
    const userName = 'Deevesh Shanmuganathan'
    const location = 'Melbourne, Australia'

    const comments = [
      {
        id: '1',
        photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
        userName: 'Harvey Spector',
        content: 'Donna is Donna',
        createdAt: 1
      }
    ]

    return (
    <Router>
      <Navibar />
      <nav className="navbar navbar-light bg-light" style={{padding:30}}>
      </nav>

      <div style={{ margin: '0 auto', width: '50%', color: '#93c6c8' }}>
        <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
      </div>
      </Router>

    )
  }
}

export default Profile
