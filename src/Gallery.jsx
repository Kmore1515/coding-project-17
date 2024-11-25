import { useState, useEffect } from 'react'

function TourDashbouard() {
    const [tours, setTours] = useState([]);
    const [Loading, setLoading] = useState(false)
    const [showMore, setShowMore] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://www.course-api.com/react-tours-project`) // fetching from the api
            .then(response => response.json())
            .then(data => setTours(data));
    }, []);

    const handleNotInterested = (id) => {
        setTours(tours.filter((tour) => tour.id !== id))
    };

    const handleShowMore = (id) => {
        setShowMore(prevState => ({...prevState, [id]: !prevState[id]}))
    };
        if (Loading) {
            return <h3> LOADING...</h3>
        }
        if (error) {
            return <h3> Error, please try again.</h3>
        }
    return (
        <>
        <h2>Tours</h2>
        <ul>
            {tours.map(tour => ( // Grabing all the names, info, images, and prices to display them.
                <li key={tour.id}>
                    <h3> <u>Tour Name: {tour.name}</u></h3> 
                    <img src={tour.image}/> 
                    <p>Price: ${tour.price}</p>
                    <p>{showMore[tour.id] ? tour.info : `${tour.info.substring(0,150)}...`}</p>
                    <button onClick={() => handleNotInterested(tour.id)}> Not Interested </button>
                    <button onClick={() => handleShowMore(tour.id)}> Show More </button>
                </li>
            ))}

        </ul>
        </>
    );
}

export default TourDashbouard;