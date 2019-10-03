/**
 * Artifact List Page
 * INCOMPLETE
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Xiaoxuan Li - ID: 933206, Sep 21, 2019
 **/

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { getItems, addItems } from '../actions/artifactActions';
import PropTypes from 'prop-types';

import './Home.css';
import Sample from './sample artifact.jpeg';
import FilterPool from './FilterPool';
import Update from './Update';


class ArtifactList extends Component {

    componentDidMount(){
      this.props.getItems();
    }

    render(){
        return(
            <div className="row">
              <div className="col-sm-4" id="card1">
                <div className="card">
                  <img className="card-img-top"
                  src="http://res.cloudinary.com/dducaeiio/image/upload/v1569909394/dpypmg9szkehrywerd1t.jpg"
                  alt="Artifact image" width="100px" height="100px"/>
                  <div className="card-body">
                    <h5 className="card-title">Artifact Name</h5>
                    <span className="badge badge-pill badge-info">filter1</span>
                    <p className="card-text">Artifact desciptions will appears here.</p>
                    <a href="###" className="btn btn-outline-info">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card" id="card2">
                  <img className="card-img-top" src={Sample} alt="Artifact image" width="100px" height="100px"/>
                  <div className="card-body">
                    <h5 className="card-title">Artifact Name</h5>
                    <span className="badge badge-pill badge-warning">filter2</span>
                    <p className="card-text">Artifact desciptions will appears here.</p>
                    <a href="###" className="btn btn-outline-info">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <FilterPool />
                <Update/>
              </div>
            </div>
        );
    }
}

ArtifactList.propTypes = {
  getItems: PropTypes.func.isRequired,
  addItems: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  artifact: state.artifact
});

export default connect(mapStateToProps, { getItems, addItems })(ArtifactList);
