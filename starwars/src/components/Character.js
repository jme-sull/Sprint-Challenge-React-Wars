// Write your Character component here

import React from 'react'


export default function Character (props) {

    const { info } = props

    return ( 
    
    <div>
        <img alt= 'character' src={info.image}/>
        <p>Name: {info.name} </p>
        <p>Status: {info.status} </p>
        <p>Species: {info.species} </p>
    </div>

    )
    
    
}
