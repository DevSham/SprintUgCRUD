import React, { Component } from "react";
import TutorialDataService from "../services/service";

export default class AddRestaurant extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeCuisineType = this.onChangeCuisineType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeSubmitted = this.onChangeImage.bind(this);

        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            name: "",
            location: "",
            contact: "",
            cuisine_type: "",
            image_path: "",
            description: "",
            submitted: false,
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }


    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        });
    }


    onChangeCuisineType(e) {
        this.setState({
            cuisine_type: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }




    saveTutorial() {
        var data = {
            name: this.state.name,
            location: this.state.location,
            contact: this.state.contact,
            cuisine_type: this.state.cuisine_type,
            description: this.state.description
        };

        TutorialDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    location: response.data.location,
                    contact: response.data.contact,
                    description: response.data.description,
                    cuisine_type: response.data.cuisine_type,
                    image_path: response.data.image_path,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            name: "",
            location: "",
            contact: "",
            cuisine_type: "",
            image_path: "",
            description: "",
            submitted: false
        });
    }

    render() {

        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Restaurant Created Sucessfully!</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}>
                            Create New Restaurant
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.location}
                                onChange={this.onChangeLocation}
                                name="description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Contact</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.contact}
                                onChange={this.onChangeContact}
                                name="description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Cuisine Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.cuisine_type}
                                onChange={this.onChangeCuisineType}
                                name="description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.image}
                                onChange={this.onChangeImage}
                                name="description"
                            />
                        </div>


                        <div className="form-group  my-2">
                            <label htmlFor="description">Description</label>
                            <textarea

                                cols={3}
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            >
                            </textarea>
                        </div>



                        <button onClick={this.saveTutorial} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}