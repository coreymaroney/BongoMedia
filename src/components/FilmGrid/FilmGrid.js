import React, { useEffect, useState } from "react";
import { Grid, Container, Switch, FormControlLabel } from "@mui/material";
import { FilmDropdown } from "../FilmDropdown";
import { FilmCard } from "../FilmCard";

function FilmGrid() {
  const [filmDetails, setFilmDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [languageToWookie, setLanguageToWookie] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    selectedFilm(currentTitle);
  }, [languageToWookie]);

  const selectedFilm = async (title) => {
    setCurrentTitle(title);
    if (title !== "" && !languageToWookie) {
      setIsLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/films/?search=${title}`
      );
      const filmData = await response.json();
      setFilmDetails(filmData.results);
      setIsLoading(false);
    } else if (title !== "" && languageToWookie) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://swapi.dev/api/films/?search=${title}/?format=wookiee`
        );
        const filmData = await response.json();
        setFilmDetails(filmData.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      setFilmDetails([]);
    }
  };

  const convertToWookie = (e) => {
    setLanguageToWookie(e.target.checked);
  };

  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <FilmDropdown selectedFilm={selectedFilm} isLoading={isLoading} />
        <FormControlLabel
          control={
            <Switch onChange={convertToWookie} checked={languageToWookie} />
          }
          label="Convert to wookiee language"
        />
      </Grid>
      <Grid item xs={12}>
        <FilmCard filmDetails={filmDetails} />
      </Grid>
    </Container>
  );
}
export { FilmGrid };
