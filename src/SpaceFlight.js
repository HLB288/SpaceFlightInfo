import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './SpaceFlight.css'

function SpaceFlight() {
  const [flights, setFlights] = useState([])
    useEffect(() => {
      axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        setFlights(response.data)
      })
      .catch(error => {
        console.log("Error while fetching the SpaceX API: ", error)
      })
    }, [])

  return (
  <ul className='flights-list'>
        {flights.map((flight) => (
      <li key={flight.flight_number}>
        <div classNome='flight-info'>
        <img src={flight.links.mission_patch_small} 
        alt={flight.mission_name} />
        </div>
        <div className='flight-data'></div>
        <h2>{flight.mission_name}</h2>
        <p>Flight Number: {flight.flight_number}</p>
        <p>Launched Date: : {flight.flight_numberlaunch_date_utc}</p>
        <p>Flight Details: {flight.details}</p>
        <p>Launch Year: {flight.launch_year}</p>
        <a href={flight.links.article_link}>Read More about the mission and the launch</a>
        
      </li> 
      ))}
  </ul>
  );
}

export default SpaceFlight;
