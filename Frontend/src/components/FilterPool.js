import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class FilterPool extends Component {
    render(){
        return(
            <div className="filter-content" style={{width:300}}>
        			<div className="card-body">
                <h5 className="card-title">Filters</h5>
        				<div className="custom-control custom-checkbox">
        					<span className="float-right badge badge-light round">22</span>
        				  	<input type="checkbox" className="custom-control-input" id="Check1"/>
        				  	<label className="custom-control-label" htmlFor="Check1">Photo</label>
        				</div>

        				<div className="custom-control custom-checkbox">
        					<span className="float-right badge badge-light round">16</span>
        				  	<input type="checkbox" className="custom-control-input" id="Check2"/>
        				 	<label className="custom-control-label" htmlFor="Check2">Jewellery</label>
        				</div>

        			</div>
        		</div>

        );
    }
}

export default FilterPool;
