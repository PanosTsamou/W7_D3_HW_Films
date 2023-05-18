const MoreFilms = () =>{
    const link = "https://www.imdb.com/calendar/?region=gb"
    const text = 'View more upcoming releases>>'
    

    return (
        <a href={link}>

        <button >{text}</button>
        </a>
    )
}

export default MoreFilms