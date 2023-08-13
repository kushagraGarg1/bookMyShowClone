import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
  

const MovieCard = ({ movie, imageUrl }) => {

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          src={imageUrl}
          alt={movie.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {movie.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;