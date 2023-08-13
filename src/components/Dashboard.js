import { Typography ,Container, Grid ,Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import MovieCard from "./MovieCard";


const Dashboard = ({ moviesData }) => {

    const handleSort = () => {
        const len  = moviesData.length;
        let temp={};
        for(let i = 0; i < len-1 ; i++){
            if(moviesData[i].name[0] > moviesData[i+1].name[0]){
                console.log(moviesData[i].name[0])
                temp = moviesData[i];
                console.log(temp , moviesData[i], moviesData[i+1]);
                moviesData[i] = moviesData[i+1];
                moviesData[i+1]=temp;
            }
            temp ={};
        }
        console.log(moviesData);
    };
 
  return (
    <React.Fragment>
        <Typography variant="h5" style={{marginTop:"2rem" , marginLeft: "8.4rem", padding:"1rem"}}>
            Recommended Movies
        </Typography>
        <Button style ={{marginLeft:"8rem"}} onClick={handleSort}>  
            Sort
        </Button>
        <Container maxWidth="lg" style={{ marginTop: "1rem" }}>
            <Grid container spacing={2}>
            {moviesData.map((movie, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Link to={`/movies/${movie.name}`} style={{textDecoration:"none"}}>
                        <MovieCard movie={movie} imageUrl={movie.imageUrl} />
                    </Link>
                </Grid>
            ))}
            </Grid>
        </Container>
    </React.Fragment>
  )};

export default Dashboard;
