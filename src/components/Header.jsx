import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWatchlist } from '../context/WatchlistContext.jsx'

export default function Header(){
  const loc = useLocation();
  const { watchlist } = useWatchlist();
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <div>
          <Link to="/" className="brand">Movie Library</Link>
          <p className="tag">Browse · Save · Watch</p>
        </div>

        <nav className="nav">
          <Link to="/" className={loc.pathname==='/'? 'active': ''}>Home</Link>
          <Link to="/watchlist" className={loc.pathname==='/watchlist'? 'active': ''}>
            Watchlist ({watchlist.length})
          </Link>
        </nav>
      </div>
    </header>
  )
}
