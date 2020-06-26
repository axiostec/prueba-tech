import React from 'react';
import {Card, Button} from 'react-bootstrap'

function CardAnime({
    image_url,
    title,
    synopsis
}){
    return(
        <Card className="CardAnime">
            <Card.Img variant="top" src={image_url} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="h6">{title}</Card.Title>
                <Card.Text className="textSinopsis">
                {synopsis}
                </Card.Text>
                <Button variant="primary">Add Favorite</Button>
            </Card.Body>
        </Card>
    )
}

export default CardAnime;