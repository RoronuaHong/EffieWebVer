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

import useRightClickMenu from '@/hooks/useRightClickMenu'

import { x, y, showMenu } from useRightClickMenu()

const EffieWebVer = () => (
  <Router>
    <div className="EffieWebVer">
      <SideNavbar x={x} y={y} showMenu={showMenu} />
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

export default EffieWebVer
