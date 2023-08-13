import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const MovieDetailsPage = ({ moviesData }) => {
  const { movieId } = useParams();
  //console.log(movieId);
  const movie = moviesData.find((movie) => movie.name === movieId);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div style={{padding:"2rem" , backgroundColor:"#F4E0B9"}}>
        <Card style={{ maxWidth: "100%" , backgroundColor:'#201D1C' }}>
        <div style={{ padding: "2rem", marginLeft:"2rem", display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "2rem" }}>
        <CardMedia
          component="img"
          image={movie.imageUrl}
          alt={movie.name}
          style={{ objectFit: "cover", width: "400px", height: "600px" }}
        />
      </div>
      <div style={{ padding: "2rem", marginLeft:"2rem" }}>
        <Card style={{ maxWidth: "600px" }}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {movie.name}
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              Genre: {movie.genre}
            </Typography>
            <br/><br/>
            <Typography variant="h5" gutterBottom style={{fontWeight:'bold'}}>
              About the movie: 
            </Typography>
            <Typography variant="body1" gutterBottom style={{fontFamily:"sans-serif"}}>
              {movie.about}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="center" mt={2} style={{padding:"1rem"}}>
            <Link to={`/booking/${movie.name}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{backgroundColor:"#F84464", fontSize: "1.2rem", borderRadius: 8, padding:"0.7rem" }}>
                Book Tickets
                </Button>
            </Link>
          </Box>
        </Card>
      </div>
    </div>
    </Card>
    </div>
  );
};

export default MovieDetailsPage;
