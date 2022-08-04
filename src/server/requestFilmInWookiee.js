async function requestFilmInWookiee(title) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/films/?search=${title}/?format=wookiee`
    );
    const filmData = await response.json();
    return filmData;
  } catch (err) {
    console.log(err);
  }
}

export { requestFilmInWookiee };
