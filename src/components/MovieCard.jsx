import React from 'react'
import { useWatchlist } from '../context/WatchlistContext.jsx'

const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

export default function MovieCard({ movie }){
  const { add, remove, isSaved } = useWatchlist();
  const saved = isSaved(movie.id);
  return (
    <article className="card">
      {movie.poster_path ? (
        <img src={IMG_BASE + movie.poster_path} alt={movie.title} />
      ) : (
        <div className="noimg">No Image</div>
      )}
      <div className="cardBody">
        <h3 className="title">{movie.title}</h3>
        <p className="meta">Rating: {movie.vote_average} • {movie.release_date}</p>
        <div className="cardActions">
          {!saved ? (
            <button onClick={() => add(movie)} className="btn">Add to Watchlist</button>
          ) : (
            <button onClick={() => remove(movie.id)} className="btn btnAlt">Remove</button>
          )}
        </div>
      </div>
    </article>
  )
}
