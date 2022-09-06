import React, { FC, useContext, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { NavLink, useLocation } from 'react-router-dom'
import { EffieContext } from '../../context/EffieContext'

import './index.scss'
interface IProps {
  title: string,
  cardList?: Array<Object>
}

const NoteList: FC<IProps> = (): ReactElement => {
  const location = useLocation()
  const { effieInfo, setEffieInfo } = useContext(EffieContext)

  const onCreateNoteCard = () => {
    setEffieInfo({
      ...effieInfo,
      allNotes: [
        ...effieInfo.allNotes,
        {
          id: Date.now() + '' + Math.ceil(Math.random() * 1000),
          desc: ``,
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      ]
    })
  }

  let curList = [] as any

  if(location.pathname.indexOf(`all-notes`) > - 1) {
    curList = effieInfo.allNotes
  } else if(location.pathname.indexOf(`intro`) > -1) {
    curList = effieInfo.effieList
  }

  return (
    <div className="note-list">
      <div className="note-list-body">
        {curList.length <= 0 ?
          <div className="empty-card" onClick={onCreateNoteCard}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </div>
          :
          (curList.map((item: any) =>
            <NavLink key={item.id}
              className={`note-card`}
              to={{ pathname: `${location.pathname}/${item.id}` }}>
                <div className='desc-content'>
                  {item.desc || <div className={`note-empty-text`}>空白文档</div>}
                </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}



export default NoteList
