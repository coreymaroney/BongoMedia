import React from "react";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function FilmCard({ filmDetails }) {
  const cards = filmDetails.map((film) => {
    return (
      <div className="film" key={film.episode_id}>
        <h1 className="title">{film.title}</h1>
        <p className="created">
          <span > Release date: </span>
        {film.release_date}
        </p>
        <p className="opening-crawl">{film.opening_crawl}</p>
      </div>
    );
  });
  return cards;
}

export { FilmCard };
