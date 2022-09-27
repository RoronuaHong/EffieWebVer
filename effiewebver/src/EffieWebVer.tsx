import { useContext } from 'react'

import { Helmet } from 'react-helmet'
import Note from './components/Note'
import NavList from './components/NavList'
import NoteList from './components/NoteList'
import SideNavbar from './components/SideNavBar'

import { EffieContext } from './context/EffieContext'

import './EffieWebVer.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// declare function Routes(
//   props: RoutesProps
// ): React.ReactElement | null;

// interface RoutesProps {
//   children?: React.ReactNode;
//   location?: Partial<Location> | string;
// }

// declare function Route(
//   props: RouteProps
// ): React.ReactElement | null;

// interface RouteProps {
//   caseSensitive?: boolean;
//   children?: React.ReactNode;
//   element?: React.ReactNode | null;
//   index?: boolean;
//   path?: string;
// }

const EffieWebVer = () => {
  const { effieInfo, setEffieInfo } = useContext(EffieContext)

  return (
    <Router>
      <div className={effieInfo.mode === `light` ? `EffieWebVer` : `EffieWebVer EffieWebVer-dark`}>
        <Helmet>
          <title>EffieWebVer</title>
          <meta name='description' content='EffieWebVer' />
        </Helmet>
        <NavList />
        <SideNavbar />
        <Routes>
          <Route path='/' element={
            <>
              <NoteList title='All Notes' />
              <Note />
            </>}
          />
          <Route path='/all-notes' element={
            <>
              <NoteList title='All Notes' />
              <Note />
            </>}
          />

          <Route path='/all-notes/:id' element={
            <>
              <NoteList title='Single' />
              <Note />
            </>
          } />

          <Route path='/intro' element={ <NoteList title='Intro' /> } />
          <Route path='/intro/:id' element={ 
            <>
              <NoteList title='Intro' />
              <Note />
            </>
          } />

          <Route path='/trash' element={ <NoteList title='Trash' /> } />
          <Route path='/trash/:id' element={ 
            <>
              <NoteList title='Trash' />
              <Note />
            </>}
          />

          <Route path='/docbox' element={ <NoteList title='Docbox' /> } />
          <Route path='/docbox/:id' element={ <Note /> } />
        </Routes>
      </div>
    </Router>
  )
}



export default EffieWebVer
