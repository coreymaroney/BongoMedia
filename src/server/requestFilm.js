async function requestFilm(title) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/films/?search=${title}`
    );
    const filmData = await response.json();
    return filmData;
  } catch (err) {
    console.log(err);
  }
}

export { requestFilm };
