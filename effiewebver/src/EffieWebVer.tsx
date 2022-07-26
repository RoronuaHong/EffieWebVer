import React from 'react'

import Note from './components/Note'
import NoteList from './components/NoteList'
import SideNavbar from './components/SideNavBar'

import './EffieWebVer.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const EffieWebVer = () => (
  <Router>
    <div className="EffieWebVer">
      <SideNavbar />
      <Routes>
        <Route path="/all-notes" element={ <NoteList title="All Notes" /> } />
        <Route path="/all-notes/:ids" element={ <Note /> } />
        <Route path="/trash" element={ <NoteList title="Trash" /> } />
        <Route path="/trash/:ids" element={ <Note /> } />
      </Routes>
    </div>
  </Router>
)

export default EffieWebVer
