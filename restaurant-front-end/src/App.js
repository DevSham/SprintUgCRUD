import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddRestaurant from "./components/add-tutorial.component";
import Restaurant from "./components/tutorial.component";
import RestaurantList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/restaurants"} className="navbar-brand">
              Restaurant
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/restaurants"} className="nav-link">
                  Restaurants
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<RestaurantList/>} />
              <Route path="/restaurants" element={<RestaurantList/>} />
              <Route path="/add" element={<AddRestaurant/>} />
              <Route path="/restaurants/:id" element={<Restaurant/>} />
            </Routes>
          </div>
        </div>
    );
  }
}

export default App;