import React, { createContext, useContext, useEffect, useState } from 'react';

const KEY = 'movie_watchlist_v1';
const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setWatchlist(JSON.parse(raw));
    } catch (e) {
      console.error('Failed to load watchlist', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(watchlist));
    } catch (e) {
      console.error('Failed to save watchlist', e);
    }
  }, [watchlist]);

  const add = (movie) => {
    setWatchlist((prev) => {
      if (prev.find(m => m.id === movie.id)) return prev;
      return [movie, ...prev];
    });
  };

  const remove = (id) => {
    setWatchlist((prev) => prev.filter(m => m.id !== id));
  };

  const isSaved = (id) => watchlist.some(m => m.id === id);

  return (
    <WatchlistContext.Provider value={{ watchlist, add, remove, isSaved }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist(){
  return useContext(WatchlistContext);
}
