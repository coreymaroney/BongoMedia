import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function FilmDropdown({ selectedFilm, isLoading }) {
  const [film, setFilm] = useState("");

  useEffect(() => {
    selectedFilm(film);
  }, [film]);

  return (
    <FormControl fullWidth disabled={isLoading}>
      <InputLabel id="film-select-label">Film</InputLabel>
      <Select
        labelId="film-select-label"
        id="film-select"
        value={film}
        label="Film"
        onChange={(e) => setFilm(e.target.value)}
      >
        <MenuItem value={""}>None</MenuItem>
        <MenuItem value={"A New Hope"}>A New Hope</MenuItem>
        <MenuItem value={"The Empire Strikes Back"}>
          The Empire Strikes Back
        </MenuItem>
        <MenuItem value={"Return of the Jedi"}>Return of the Jedi</MenuItem>
        <MenuItem value={"The Phantom Menace"}>The Phantom Menace</MenuItem>
        <MenuItem value={"Attack of the Clones"}>Attack of the Clones</MenuItem>
        <MenuItem value={"Revenge of the Sith"}>Revenge of the Sith</MenuItem>
      </Select>
    </FormControl>
  );
}

export { FilmDropdown };
