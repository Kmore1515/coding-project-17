import { useState, useEffect } from 'react'

function TourDashbouard() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`https://www.course-api.com/react-tours-project`) // fetching from the api
            .then(response => response.json())
            .then(data => setTours(data));
    }, []);
    return (
        <>
        <h2>Tours</h2>
        <ul>
            {tours.map(tour => ( // Grabing all the names, info, images, and prices to display them.
                <li key={tour.id}>
                    <h3> <u>Tour Name: {tour.name}</u></h3> 
                    <p> <b>Information:</b> {tour.info}</p> 
                    <img src={tour.image}/> 
                    <p>Price: ${tour.price}</p>
                </li>
            ))}

        </ul>
        </>
    );
}

export default TourDashbouard;