import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

export function Content({ title, movies }) {
 return(
  

  <main>
    <div className="container">
        <header>
          <span className="category">Categoria:<span> { title } </span></span>
        </header>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </div>

    
  </main>
 );
}