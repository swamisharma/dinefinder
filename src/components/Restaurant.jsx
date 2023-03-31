import "../styles/Restaurant.css"
import data from "../data";
import Header from "./Header";
import { useParams } from "react-router-dom";

export default function Restaurant(props) {
    const {city, id} = useParams();
    console.log(data[city].resto_details[0].name);

    return (
        <>
            <Header login={props} />
            <div className="container">
                <div className="carousel">
                    <img src="../src/assets/siyuan.jpg" alt="image" />
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
                        <input type="date" value="2023-01-01" required />
                        <input type="time" value="00:00" required />
                        <button>Confirm Booking</button>
                    </div>
                </div>
            </div>
        </>
    )
}