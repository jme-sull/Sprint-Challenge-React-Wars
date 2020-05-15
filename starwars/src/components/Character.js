// Write your Character component here

import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


export default function Character (props) {

    const { info } = props

    return (
    <div>
       
        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333', borderRadius: '25px', margin: '20px', padding: '20px', fontFamily: 'Courier New'}}>
            <CardImg inverse style = {{borderRadius: '25px'}}top width="100%" alt= 'character' src={info.image} />
            <CardBody inverse style= {{color: 'white'}}>
                <CardTitle>Name: {info.name}</CardTitle>
                <CardSubtitle>Status: {info.status}</CardSubtitle>
                <CardSubtitle>Species: {info.species}</CardSubtitle>
            </CardBody>
        </Card>
    
        
        
    </div>

    )
    
    
}
