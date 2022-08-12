import React from 'react'

import { Helmet } from 'react-helmet'
import Note from './components/Note'
import NoteList from './components/NoteList'
import SideNavbar from './components/SideNavBar'

import './EffieWebVer.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const EffieWebVer = () => {
  return (
    <Router>
      <div className="EffieWebVer">
        <Helmet>
          <title>EffieWebVer</title>
          <meta name='description' content='EffieWebVer' />
        </Helmet>
        <SideNavbar />
        <Routes>
          <Route path="/all-notes" element={ <NoteList title="All Notes" /> } />
          <Route path="/all-notes/:ids" element={ <Note /> } />

          <Route path="/intro" element={ <NoteList title="Intro" /> } />
          <Route path="/intro/:ids" element={ 
            <>
              <NoteList title="Intro" />
              <Note /> 
            </>
          } />

          <Route path="/trash" element={ <NoteList title="Trash" /> } />
          <Route path="/trash/:ids" element={ 
            <>
              <NoteList title="Trash" />
              <Note />
            </>}  
          />

          <Route path="/docbox" element={ <NoteList title="Docbox" /> } />
          <Route path="/docbox/:ids" element={ <Note /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default EffieWebVer
