import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



     const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The lord of the rings",
      description: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.",
      posterURL: "https://webdevolutions.blob.core.windows.net/cms/assets/lord_of_the_ring_trilogy_fc41c807b6.png",
      rating: 7.7,
    },
    {
      title: "Blade Runner 2049",
      description: "Blade Runner: 2049 takes us to the epicenter of the ecological and human disasters responsible. About two-thirds of the way through the movie, we take a trip to what remains of Las Vegas.",
      posterURL: "https://lozierinstitute.org/wp-content/uploads/2023/02/Blade-Runner-2049.jpg",
      rating: 8.4,
    },
    {
      title: "The Godfather",
      description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael.",
      posterURL: "https://images5.alphacoders.com/131/1315822.jpg",
      rating: 9.2,
    },
    {
      title: "Harka",
      description: "A young Tunisian man dreams of a better life and sells contraband petrol on the black market. When his father dies, he is left to take care of his two sisters, with eviction from their home looming.",
      posterURL: "data:image/jpeg;base64,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",
      rating: 6.3,
      
    },
    {
      title: "Hitman",
      description: "An elusive killer, Agent 47 is an elite assassin as mysterious as the origin of the barcode tattooed",
      posterURL: "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/hitman-2007/EB20071120REVIEWS711200303AR.jpg",
      rating: 6.4,
    },
  ]);

  const [movieFiltered, setMovieFilter] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setMovieFilter([...movies, newMovie]);
  };

  const filterMovie = ({ title, rate }) => {
    const filtered = movies.filter(
      (movie) =>
        (movie.title.toLowerCase().includes(title.toLowerCase())) && (movie.rating >= rate)
    );
    setMovieFilter(filtered);
  };

  const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState("");

    const ajout = (e) => {
      e.preventDefault();

      const newMovie = {
        title,
        description,
        posterURL,
        rating,
      };

      onAddMovie(newMovie);

      setTitle("");
      setDescription("");
      setPosterURL("");
      setRating("");
    };

    return (
    
      <Form onSubmit={ajout} id="formulaire" className="text-center" >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" value={title} placeholder="Movie's Title.." onChange={(e) => setTitle(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} placeholder="Movie's Description" onChange={(e) => setDescription(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Movie Url</Form.Label>
            <Form.Control type="text" value={posterURL} placeholder="URL Movie Image" onChange={(e) => setPosterURL(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" value={rating} placeholder="Movie's rating?" onChange={(e) => setRating(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label><br/><br/></Form.Label>
          <Button variant="primary" style={{width:"200px"}} type="sumbit">Add Movie</Button>{' '}
          </Form.Group>
        </Row>
      </Form>
   
    );
  };

  return (
    <>
      <h1 className='titlee'>Tuniflix</h1>
      <AddMovieForm onAddMovie={addMovie} />
      <Filter onFilter={filterMovie} />
      <MovieList movies={movieFiltered} />
    </>
  );
};




export default App;
    
  


