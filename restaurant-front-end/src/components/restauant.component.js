import React, { Component } from "react";
import RestaurantsDataService from "../services/service";
import { withRouter } from '../common/with-router';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImage_path = this.onChangeImage_path.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeCuisine_type = this.onChangeCuisine_type.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.getRestaurant = this.getRestaurant.bind(this);
        this.updateRestaurant = this.updateRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            currentRestaurant: {
                id: null,
                name: "",
                image: "",
                location: "",
                description: "",
                cuisine_type: "",
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getRestaurant(this.props.router.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentRestaurant: {
                    ...prevState.currentRestaurant,
                    name: name
                }
            };
        });
    }

    onChangeImage_path(e) {
        const image_path = e.target.value;

        this.setState(function(prevState) {
            return {
                currentRestaurant: {
                    ...prevState.currentRestaurant,
                    image_path: image_path
                }
            };
        });
    }

    onChangeLocation(e) {
        const location = e.target.value;

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                location: location
            }
        }));
    }

    onChangeCuisine_type(e) {
        const cuisine_type = e.target.value;

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                cuisine_type: cuisine_type
            }
        }));
    }
    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                description: description
            }
        }));
    }
    onChangeContact(e) {
            const contact = e.target.value;

            this.setState(prevState => ({
                currentRestaurant: {
                    ...prevState.currentRestaurant,
                    contact: contact
                }
            }));
        }

    getRestaurant(id) {
        RestaurantsDataService.get(id)
            .then(response => {
                this.setState({
                    currentRestaurant: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRestaurant() {
        RestaurantsDataService.update(
            this.state.currentRestaurant._id,
            this.state.currentRestaurant
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The restaurant was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteRestaurant() {
        RestaurantsDataService.delete(this.state.currentRestaurant._id)
            .then(response => {
                console.log(response.data);
                this.props.router.navigate('/restaurants');
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentRestaurant } = this.state;

        return (
            <div>
                {currentRestaurant ? (
                    <div className="edit-form">
                        <h4>Update Restaurant</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={currentRestaurant.name}
                                    onChange={this.onChangeName}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    required
                                    value={currentRestaurant.location}
                                    onChange={this.onChangeLocation}
                                    name="location"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contact"
                                    required
                                    value={currentRestaurant.contact}
                                    onChange={this.onChangeContact}
                                    name="contact"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cuisine_type">Cuisine Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cuisine_type"
                                    required
                                    value={currentRestaurant.cuisine_type}
                                    onChange={this.onChangeCuisine_type}
                                    name="cuisine_type"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image_path">Image Path</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="image_path"
                                    required
                                    value={currentRestaurant.image_path}
                                    onChange={this.onChangeImage_path}
                                    name="image_path"
                                />
                            </div>


                            <div className="form-group  my-2">
                                <label htmlFor="description">Description</label>
                                <textarea

                                    cols={3}
                                    className="form-control"
                                    id="description"
                                    value={currentRestaurant.description}
                                    onChange={this.onChangeDescription}
                                    name="description"
                                >
                            </textarea>
                            </div>
                        </form>

                        <button
                            className="btn btn-danger m-4"
                            onClick={this.deleteRestaurant}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="btn btn-success m-6"
                            onClick={this.updateRestaurant}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Please click on a Restaurant...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Restaurant);