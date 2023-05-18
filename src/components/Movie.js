import React from "react"
const Movie = ({name , url}) =>{

    return (
        <a href={url}>{name}</a>
    )
}

export default Movie