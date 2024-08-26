import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div style={{display:"flex" , flexWrap:"wrap"}}>
         <Card style={{ width: 'rem' }}>
      <Card.Img variant="top" src= {movie.posterUrl} />
      <Card.Body>
        <Card.Title> {movie.title}  </Card.Title>
        <Card.Text>
 {movie.description}

        </Card.Text>
        <Link to={`/movie/${movie.id}`}>
        <Button variant="primary"> Description </Button>
        </Link>
      </Card.Body>
    </Card>  
        
        
          </div>
  )
}

export default MovieCard