import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Watchlist from './pages/Watchlist.jsx'
import Header from './components/Header.jsx'

export default function App(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </div>
  )
}
