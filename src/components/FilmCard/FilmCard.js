import React from "react";

function FilmCard({ filmDetails }) {
  const cards = filmDetails.map((film) => {
    return (
      <div className="film" key={film.episode_id}>
        <h1 className="title">{film.title}</h1>
        <p className="created">
          <b> Release date: </b>
          {film.release_date}
        </p>
        <p className="opening-crawl">
          <i>{film.opening_crawl}</i>
        </p>
      </div>
    );
  });
  return <div>{cards.length ? cards : <h3>No Film data available.</h3>}</div>;
}

export { FilmCard };
