import React, { useEffect, useState } from "react";
import { requestFilm, requestFilmInWookiee } from "../../server/";
import { Grid, Container, Switch, FormControlLabel } from "@mui/material";
import { FilmDropdown } from "../FilmDropdown";
import { FilmCard } from "../FilmCard";

function FilmGrid() {
  const [filmDetails, setFilmDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [languageToWookie, setLanguageToWookie] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");

  // Trigger API call when switch is toggled
  useEffect(() => {
    selectedFilm(currentTitle);
  }, [languageToWookie]);

  const selectedFilm = async (title) => {
    setCurrentTitle(title);
    if (title && !languageToWookie) {
      setIsLoading(true);
      const filmData = await requestFilm(title);
      setFilmDetails(filmData.results);
      setIsLoading(false);
    } else if (title && languageToWookie) {
      try {
        setIsLoading(true);
        const filmData = await requestFilmInWookiee(title);
        setFilmDetails(filmData.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      setFilmDetails([]);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <FilmDropdown selectedFilm={selectedFilm} isLoading={isLoading} />
        <FormControlLabel
          control={
            <Switch
              onChange={(e) => setLanguageToWookie(e.target.checked)}
              checked={languageToWookie}
            />
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
