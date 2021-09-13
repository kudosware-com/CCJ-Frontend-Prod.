import React from 'react'
import '../css/Card.css'

function Card({name}) {
    return (
        <button className="search-card">
            <h4>{name}</h4>
        </button>
    )
}

export default Card
