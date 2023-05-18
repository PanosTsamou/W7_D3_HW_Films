import React from "react"
import Movie from "./Movie"

const UpcomingList = ({listOfFilms}) => {

    const upcomingListOfFilms = listOfFilms.map((movie) => {
        return (
            <li key={movie.id}>

                <Movie name = {movie.name} url = {movie.url}/>
            </li>
        );
    })

    return (
        <ul>
            {upcomingListOfFilms}

        </ul>
    )
}

export default UpcomingList