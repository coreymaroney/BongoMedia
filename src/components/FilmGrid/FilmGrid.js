import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import { FilmDropdown } from "../FilmDropdown";
import { FilmCard } from "../FilmCard";

function FilmGrid() {
  const [filmDetails, setFilmDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectedFilm = async (title) => {
    if (title) {
      setIsLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/films/?search=${title}`
      );
      const filmData = await response.json();
      setFilmDetails(filmData.results);
      setIsLoading(false);
    } else {
      setFilmDetails([]);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <FilmDropdown selectedFilm={selectedFilm} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12}>
        <FilmCard filmDetails={filmDetails} />
      </Grid>
    </Container>
  );
}
export { FilmGrid };
