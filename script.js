const movies = [
  { title: "Smile Before You Die", genre: "Thriller", image: "https://via.placeholder.com/200x300?text=Smile", desc: "A mystery with twists.", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Detective Vesni", genre: "Mystery", image: "https://via.placeholder.com/200x300?text=Vesni", desc: "The story of a student investigator.", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Laughing Dead", genre: "Comedy", image: "https://via.placeholder.com/200x300?text=Comedy", desc: "Zombies with a sense of humor.", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Explosion Day", genre: "Action", image: "https://via.placeholder.com/200x300?text=Action", desc: "Everything goes boom.", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

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

document.getElementById("search").addEventListener("input", (e) => {
  renderMovies(e.target.value);
});

document.getElementById("genre").addEventListener("change", () => {
  renderMovies(document.getElementById("search").value);
});

function surprise() {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  alert(`🎬 Your surprise movie is: ${randomMovie.title}`);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function openModal(movie) {
  const modal = document.getElementById("trailer-modal");
  const trailer = document.getElementById("trailer-video");
  const title = document.getElementById("movie-title");

  trailer.src = movie.trailer;
  title.textContent = movie.title;
  
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("trailer-modal");
  const trailer = document.getElementById("trailer-video");
  
  modal.style.display = "none";
  trailer.src = ""; // Stop video when modal is closed
}

renderMovies();
