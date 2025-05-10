clet movies = [];

fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    movies = data;
    renderMovies();
  });

function renderMovies(filter = "") {
  const grid = document.getElementById("movie-grid");
  const genre = document.getElementById("genre").value;
  grid.innerHTML = "";

  movies
    .filter(movie => 
      (genre === "All" || movie.genre === genre) &&
      movie.title.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie";
      div.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.desc}</p>
      `;
      div.onclick = () => openModal(movie);
      grid.appendChild(div);
    });
}

