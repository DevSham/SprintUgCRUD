import React, { Component } from "react";
import RestaurantsDataService from "../services/service";
import { Link } from "react-router-dom";

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.retrieveRestaurant = this.retrieveRestaurant.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveRestaurant = this.setActiveRestaurant.bind(this);

        this.state = {
            currentRestaurant: null,
        };
    }

    componentDidMount() {
        this.retrieveRestaurant();
    }

    retrieveRestaurant() {
        RestaurantsDataService.getAll()
            .then(response => {
                this.setState({
                    restaurants: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveRestaurant();
        this.setState({
            currentRestaurant: null,
            currentIndex: -1
        });
    }

    setActiveRestaurant(restaurant, index) {
        this.setState({
            currentRestaurant: restaurant,
            currentIndex: index
        });
    }

    render() {
        const {restaurants, currentRestaurant, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Restaurants List</h4>

                    <ul className="list-group">
                        {restaurants &&
                        restaurants.map((restaurant, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveRestaurant(restaurant, index)}
                                key={index}
                            >
                                <div>
                                    {restaurant.name}
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentRestaurant ? (
                        <div>
                            <h4>Restaurant</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentRestaurant.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Location:</strong>
                                </label>{" "}
                                {currentRestaurant.location}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentRestaurant.description}
                            </div>
                            <Link
                                to={"/restaurants/" + currentRestaurant._id}
                                className="btn btn-info text-white m-auto"
                            >
                                Edit Restaurant
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Restaurant...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}