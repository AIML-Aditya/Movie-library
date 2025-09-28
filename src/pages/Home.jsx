import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard.jsx'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = 'https://api.themoviedb.org/3';

export default function Home(){
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopular();
  }, []);

  async function fetchPopular(){
    setLoading(true);
    setError(null);
    try{
      const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      if(!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setMovies(data.results || []);
    }catch(e){
      setError(e.message);
    }finally{
      setLoading(false);
    }
  }

  async function handleSearch(e){
    e.preventDefault();
    if(!query) { fetchPopular(); return; }
    setLoading(true);
    setError(null);
    try{
      const res = await fetch(`${BASE}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`);
      if(!res.ok) throw new Error('Search failed');
      const data = await res.json();
      setMovies(data.results || []);
    }catch(e){
      setError(e.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <header className="top">
        <h1>Movie Library</h1>
        <p className="subtitle">Browse popular movies and search titles (TMDB)</p>
        <form onSubmit={handleSearch} className="searchForm">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search movies by title..." />
          <button type="submit">Search</button>
          <button type="button" onClick={()=>{ setQuery(''); fetchPopular(); }}>Reset</button>
        </form>
      </header>

      <section>
        {loading && <p className="info">Loading movies...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && movies.length===0 && <p className="info">No movies found</p>}

        <div className="grid">
          {movies.map(m => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </section>
    </main>
  )
}
