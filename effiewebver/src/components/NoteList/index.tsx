import React, { FC, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { NavLink, useLocation } from 'react-router-dom'

import './index.scss'
interface IProps {
  title: string,
  cardList?: Array<Object>
}

const NoteList: FC<IProps> = ({
  cardList = []
}): ReactElement => {
  const location = useLocation()

  const onCreateNoteCard = () => {
    console.log(`新建文稿`)
  }

  return (
    <div className="note-list">
      <div className="note-list-body">
        {cardList.length <= 0 ? 
          <div className="empty-card" onClick={onCreateNoteCard}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </div>
          :
          <NavLink 
            className="note-card"
            // key={note._id}
            // state={{ note }}
            // to={{ pathname: `${location.pathname}/${note._id}` }}
            to={`/trash`}>
            123
          </NavLink>}
      </div>
    </div>
  )
}

export default NoteList
