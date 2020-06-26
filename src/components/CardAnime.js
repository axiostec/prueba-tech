import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap'

export default class CardAnime extends Component{
    render(){
        return(
            <Card key={this.props.mal_id} className="CardAnime">
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="h6">{this.props.title}</Card.Title>
                    <Card.Text className="textSinopsis">
                    {this.props.synopsis}
                    </Card.Text>
                    <Button variant="primary">Add Favorite</Button>
                </Card.Body>
            </Card>
        )
    }
}