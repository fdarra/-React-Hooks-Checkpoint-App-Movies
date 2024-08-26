import { moviesData } from "./MoviesData";
import AddMovie from "./components/addmovie/AddMovie";
import MoviesListe from "./components/moviesliste/MoviesListe";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <div className="App">
   
      {/* <AddMovie /> */}

      <MoviesListe movies={movies} />
    </div>
  );
}

export default App;
