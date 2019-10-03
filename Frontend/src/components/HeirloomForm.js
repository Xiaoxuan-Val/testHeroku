//Odin Wong
//date 21/09/19
//compontent for a form to allow adding a new heirloom

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class HeirloomForm extends React.Component {

	constructor() {
		super()
		this.state = {
			title: "",
			age: NaN,
			from: "",
			ownerFirstName: "",
			ownerLastName: "",
			description: "",
			previousOwners: "",
			primaryTag: "",
			barcode: "",
			dateAdded: "",
            picture: [],
            picturePath: []
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

        this.primaryTags = ["book", "jewllery", "paintings", "furniture", "picture", "misc", "DONT HARDCODE THESE TAGS" ]
    }

    

	//handles behaviour for submitting the whole form 
    handleSubmit(event) {
        console.log("submitted event");
	}

	//handle change on the form
	handleChange(event) {
		const {name, value, type, files} = event.target

        if (name === "picture") {
            //store the arrays of file paths and local urls
            var i
            var pic = []
            var path = []
            for (i = 0; i < 2; i++) {
                path[i] = files[i]
                pic[i] = URL.createObjectURL(files[i])
            }
            this.setState({
                picturePath : path,
                picture : pic
            })

		} else {
			this.setState({[name]: value})
		}
	}

	//small functional component for a single text input (form-group css class) for convenience
	formTextRender(fieldName, prompt) {
		return(
			<div className="form-group">
				<label for={fieldName}>{prompt}:</label>
				<input className="form-control" name={fieldName} type="text" id={fieldName} placeholder="type here" onChange={this.handleChange} />
			</div>
		)
	}

	render() {
		
		return (
			<div className="row bg-light">
				<div className="bg-light col-sm-6">
					<form onSubmit={this.handleSubmit}>

                        {/*input title*/}
						{this.formTextRender("title","Artifact Title")}

                        {/*input the owners first and last names*/}
						<div className="form-group">
							<label for="desc">Item owner:</label>
							<div className="form-inline">
								<input className="form-control" type="text" name="ownerFirstName" id="desc" placeholder="first name" onChange={this.handleChange} />
								<input className="form-control" type="text" name="ownerLastName" id="desc" placeholder="family name" onChange={this.handleChange} />
							</div>
						</div>

                        {/*textarea input for an item description*/}
						<div className="form-group">
							<label for="desc">Item description:</label>
							<textarea className="form-control" name="desc" id="desc" placeholder="enter a description" onChange={this.handleChange} />
						</div>

                        {/*input previous owners*/}
						{this.formTextRender("previousOwners", "previous owners")}	

                        {/*drop down menu to set the primary tag*/}
                        <div className="form-group">
                            <label for="primaryTag">primary tag</label>
                            <select className="form-control" name="primaryTag" id="primaryTag" onChange={this.handleChange}>
                                {this.primaryTags.map(tag => <option value={tag}>{tag}</option>)}
                            </select> 
                        </div>

                        {/*upload image(s) of the artifact*/}
						<div className="form-group">
                            <label for="picture">upload images</label>
                            <input className="form-control" type="file" name="picture" id="picture" accept="image/*" multiple onChange={this.handleChange} />
						</div>

                        {/*submit button*/}
						<button className="btn-default btn-sm" onSubmit={this.handleSubmit}>submit</button>

					</form>
					
                </div>

                {/*place to display the image(s) before upload*/}
                <div className="bg-light col-sm-6">
                    <div className="row">
                        {this.state.picture.map(
                            p =>
                            (
                                <div className="col-sm-4">
                                    <img className="img-thumbnail" src={p} />
                                </div>
                            )
                        )}
                    </div>
                </div>
			</div>
		)
	}
	

}

export default HeirloomForm