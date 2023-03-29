import "../styles/background.css"
import data from "../data"
import { useState } from "react"

export default function Background() {
    const [city, setCity] = useState(0);
    const [restaurant, setRestaurant] = useState(0);

    function handleCityChange(e) {
        setCity(e.target.value);
        setRestaurant(0);
    }

    function handleRestaurantChange(e) {
        setRestaurant(e.target.value);
    }

    const cityOptions = data.map((obj, index) => {
        return <option key={index} value={index}>{obj.city}</option>
    });

    const restaurantOptions = data[city].resto_details.map((resto, index) => {
        return <option key={index} value={index}>{resto.name}</option>
    });

    return (
        <div className="container">
            <div className="hero-section">
                <div className="hero-section-title">
                    <h1>Discover your next delicious destination with just a tap: Find the perfect restaurant for any occasion with our app!</h1>
                </div>
            </div>
            <div className="search-section">
                <select className="select-city" value={city} onChange={handleCityChange}>
                    {cityOptions}
                </select>
                <select className="select-restaurant" value={restaurant} onChange={handleRestaurantChange}>
                    {restaurantOptions}
                </select>
                <button className="get-details">Get Details</button>
            </div>
        </div>
    )
}