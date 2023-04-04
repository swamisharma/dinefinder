import "../styles/Restaurant.css"
import data from "../data";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Restaurant(props) {
    const [date, setDate] = useState("");
    const {city, id} = useParams();

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    let array = [];
    if (localStorage.getItem("booking")){
        array = JSON.parse(localStorage.getItem("booking"));
    }

    function handleConfirmBooking() {
        array.push({date:`${date}`, city:`${city}`, id:`${id}`});
        localStorage.setItem("booking", JSON.stringify(array));
        alert(`Hello ${props.name} Booking Confirmed!!`);
    }

    return (
        <>
            <Header login={props} />
            <div className="container">
                <div className="carousel">
                    <img src={data[city].resto_details[id].url} alt="image" />
                </div>
                <div className="description-details-booking">
                    <div className="description">
                        <div className="resto-name">
                            <h1>{data[city].resto_details[id].name}</h1>
                        </div>
                        <div className="description-rating">
                            <span>{data[city].resto_details[id].description}</span>
                            <div className="rating">
                                <h3>{data[city].resto_details[id].rating} &#9733;</h3>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <h3>Address</h3>
                        <span>{data[city].resto_details[id].address}</span>
                    </div>
                    <div className="booking">
                        <h3>Booking</h3>
                        <input type="date" required onChange={handleDateChange}/>
                        <input type="time" required />
                        <button onClick={handleConfirmBooking}>Confirm Booking</button>
                    </div>
                </div>
            </div>
        </>
    )
}