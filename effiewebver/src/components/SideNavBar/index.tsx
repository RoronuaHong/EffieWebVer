import React, { FC, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faSearch, faStickyNote } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import './index.scss'

interface IProps {
  
}

const SideNavBar: FC<IProps> = ({

}) : ReactElement => {
  const handleCreateNote = () => {

  }

  const onHandleSearch = () => {
    console.log(`搜索`)
  }

  return (
    <div className="sidenavbar">
      <div className="sidenavbar-top">
        <div className="sidenavbar-top-create-notes">
          <div className="create-note-btn" onClick={handleCreateNote}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
            <div className="title">
              新建文稿
            </div>
          </div>
        </div>
        <div className="sidenavbar-top-menu-item">
          <div className="search-div">
            <div className="search" onClick={onHandleSearch}>
              <FontAwesomeIcon className="icon" icon={faSearch} />
              搜索
            </div>
          </div>
          <ul>
            <li>
              <NavLink to="all-notes">
                <FontAwesomeIcon className="icon" icon={faStickyNote} />
                All Notes
              </NavLink>
            </li>
            <li>
              <NavLink to="trash">
                <FontAwesomeIcon className="icon" icon={faTrash} />
                Trash
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidenavbar-bottom">
        <div className="sidenavbar-bottom">
          外观切换
        </div>
      </div>
    </div>
  )
}

export default SideNavBar
