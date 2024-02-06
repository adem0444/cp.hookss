import React from 'react';
import Card from 'react-bootstrap/Card';



const MovieCard = ({ movie }) => {
    return (
        <><br/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterURL}/>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <p>{movie.description}</p>
                        <p> <strong>Rating:</strong> {movie.rating}</p>
                    </Card.Text>
                </Card.Body>
            </Card><br/>
        </>
    );
};

export default MovieCard;