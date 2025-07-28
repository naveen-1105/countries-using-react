import { Link } from "react-router"


function Card({flag, name, population, region,capital,info}) {
    return (
        <>
        <Link to={`/${name}`} className="card" state={info}>
            <img src={flag} alt=""/>
            <div className="details">
            <h3 className="title">{name}</h3>
            <p><b>Population :</b>{population}</p>
            <p><b>Region :</b>{region}</p>
            <p><b>Capital :</b>{capital}</p>
            </div>
        </Link>
</>
    )
}

export default Card
