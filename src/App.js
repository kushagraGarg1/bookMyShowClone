import LoginSignUpPage from "./components/LoginSignUpPage";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import MovieDetailsPage from "./components/MoviesDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { SeatProvider } from "./components/SeatContext";
import BookingHistory from "./components/BookingHistory";
import { useEffect } from "react";

function App() {

useEffect(() => {
  document.title = "BookMyShow";
}, []);

const moviesData = [
    {
        name:"Oppenheimer",
        imageUrl:"/images/Oppenheimer.jpg",
        genre:"Documentary",
        about:"The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
    },
    {
        name:"Barbie",
        imageUrl:"/images/Barbie.jpg",
        genre:"Comedy",
        about:"To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you are a Ken.",
    },
    {
        name:"Fast X",
        imageUrl:"/images/FastX.jpg",
        genre:"Action",
        about:"Dom Toretto and his family must confront a terrifying new enemy who`s fueled by revenge.",
    },
    {
        name:"The Flash",
        imageUrl:"/images/Flash.jpg",
        genre:"Sci-Fi",
        about:"Barry uses his superpowers to travel back in time to prevent Nora`s murder which alters the future. He gets trapped in a reality where General Zod has returned and no superheroes to turn to.",
    },
    {
        name:"John Wick 4",
        imageUrl:"/images/JohnWick4.jpg",
        genre:"Action",
        about:"John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth installment of the series. With the price on his head ever increasing, Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Osaka to Berlin.",
    },
    {
        name:"Guardians of Galaxy",
        imageUrl:"/images/GuardianOfGalaxy3.jpg",
        genre:"Sci-Fo",
        about:"Our beloved band of misfits are settling into life on Knowhere. But it isn`t long before their lives are upended by the echoes of Rocket`s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission to save Rocket`s life - a mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    },
    {
        name:"My Fault",
        imageUrl:"/images/MyFault.jpg",
        genre:"Drama",
        about:"Noah has to leave her town, boyfriend and friends behind and move into the mansion of her mother's new rich husband. There she meets Nick, her new stepbrother. She soon discovers that, behind the image of a model son, Nick is hiding something.",
    },
    {
        name:"Spiderman",
        imageUrl:"/images/Spiderman.jpg",
        genre:"Sci-fi",
        about:"Miles Morales returns for the next chapter of the Spider-Verse saga, Spider-Man: Across the Spider-Verse. After reuniting with Gwen Stacy, Brooklyns full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.",
    },

];

const[isAuthenticated, setIsAuthenticated]= useState(false);
const toggleAuthentication = () => {
  setIsAuthenticated((prevIsAuthenticated) => !prevIsAuthenticated);
};


  return (
    <SeatProvider>
      <React.Fragment>
        <Header isAuthenticated={isAuthenticated} toggleAuthentication={toggleAuthentication}/>
        <Routes>
          <Route path="/" element={<LoginSignUpPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={<Dashboard moviesData={moviesData} />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage moviesData={moviesData} />} />
          <Route path="/booking/:movieId" element={<BookingPage moviesData={moviesData}/>} />
          <Route path ="/history" element={<BookingHistory/>} />
        </Routes>
      </React.Fragment>
    </SeatProvider>
  );
}

export default App;
