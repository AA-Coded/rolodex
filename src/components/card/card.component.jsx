// import { Component } from "react";
import './card.styles.css'

const Card = ({ cat }) => {
        const { name, email, id } = cat

        return(
            <div className="card-container" key={id}>
                <img
                    alt={`Cat ${name}`}
                    src={`https://robohash.org/${id}?set=set4&size=180x180`}
                />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }

export default Card