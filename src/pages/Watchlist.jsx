import React from 'react'
import MovieCard from '../components/MovieCard.jsx'
import { useWatchlist } from '../context/WatchlistContext.jsx'

export default function Watchlist(){
  const { watchlist } = useWatchlist();

  return (
    <main className="container">
      <header className="top">
        <h1>Your Watchlist</h1>
        <p className="subtitle">Movies you've saved will appear here and persist across refresh.</p>
      </header>

      <section>
        {watchlist.length===0 ? (
          <p className="info">No movies in watchlist yet. Add some from Home.</p>
        ) : (
          <div className="grid">
            {watchlist.map(m => <MovieCard key={m.id} movie={m} />)}
          </div>
        )}
      </section>
    </main>
  )
}
