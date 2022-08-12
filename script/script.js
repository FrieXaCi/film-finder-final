// add all movies to the dom

const addMovie = document.querySelector("#add-movie");

let addMoviesToDom = (movies) => {
  movies.forEach((movie) => {
    let addLi = document.createElement("li");
    let a = document.createElement("a");
    let img = document.createElement("img");

    addLi.innerText = movie.title;
    img.src = movie.poster;
    addMovie.appendChild(addLi);
    addLi.appendChild(a);
    a.target = "_blank";
    a.href = "https://www.imdb.com/title/" + movie.imdbID;
    a.appendChild(img);
  });
};

addMoviesToDom(movies);

//remove movie from dom
function removeMoviesFromDom() {
  const movieList = document.querySelectorAll("li");
  movieList.forEach((element) => element.remove());
  while (movieList.firstChild) {
    movieList.removeChild(movieList.firstChild);
  }
}
// movie filters
let newMoviesFilter = movies.filter((movies) => movies.year > 2014);

let avangerFilter = movies.filter((movies) => movies.title.includes("Avenger"));

let xMenFilter = movies.filter((movies) => movies.title.includes("X-Men"));

let princessFilter = movies.filter((movies) =>
  movies.title.includes("Princess")
);

let batmanFilter = movies.filter((movies) => movies.title.includes("Batman"));

// radiobutton function
const handleOnChange = (e) => {
  switch (e.target.value) {
    case "new-movies":
      console.log("checked");
      addFirstClone();
      addLastClone();
      removeMoviesFromDom();
      addMoviesToDom(newMoviesFilter);
      break;
    case "avenger":
      console.log("checked");
      addFirstClone();
      addLastClone();
      removeMoviesFromDom();
      addMoviesToDom(avangerFilter);
      break;
    case "x-men":
      console.log("checked");
      addFirstClone();
      addLastClone();
      removeMoviesFromDom();
      addMoviesToDom(xMenFilter);
      break;
    case "princess":
      console.log("checked");
      addFirstClone();
      addLastClone();
      removeMoviesFromDom();
      addMoviesToDom(princessFilter);
      break;
    case "batman":
      console.log("checked");
      addFirstClone();
      addLastClone();
      removeMoviesFromDom();
      addMoviesToDom(batmanFilter);
      break;

    default:
      addFirstClone();
      addLastClone();
      addMoviesToDom(movies);
  }
};

// selecting radiobutton
const radioBtn = document.querySelectorAll('[name = "film-finder"]');
radioBtn.forEach((radio) => {
  radio.addEventListener("change", handleOnChange);
});

// search bar
// dom elements
const searchInput = document.getElementById("movie-input");
const getMovieNames = document.getElementsByTagName("li");
let removeSearch = document.getElementById("add-movie");

// function searchbar
const searchItems = (event) => {
  const { value } = event.target;
  const searchMovie = value.toLowerCase();
  for (const nameMovie of getMovieNames) {
    let name = nameMovie.textContent.toLowerCase();
    if (name.includes(searchMovie)) {
      nameMovie.style.display = "inline";
    } else {
      nameMovie.style.display = "none";
    }
  }
};
// searchbar event
searchInput.addEventListener("input", searchItems);
