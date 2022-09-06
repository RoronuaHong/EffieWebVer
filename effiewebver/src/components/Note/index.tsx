import React, { useContext } from 'react'
import { EffieContext } from '../../context/EffieContext'

import './index.scss'

const Note = () => {
  const { effieInfo, setEffieInfo } = useContext(EffieContext)

  const {
    allNotes
  } = effieInfo

  // TODO: 完成textarea的更新。
  const handleDesc = () => {
    // setEffieInfo

  }

  const handleCreateNote = () => {
    // console.log(`新建文稿2`)

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

  return (
    <div className="note">  
      {effieInfo.allNotes.length === 0 && <div className="note-content">
        <div className="note-empty-content">
          <div className="note-title">
            没有选中的文稿
          </div>
          <div className="new-note-btn" onClick={handleCreateNote}>
            新建文稿
          </div>
        </div>
      </div>}

      {/* {effieInfo.allNotes.length > 0 &&
        <div className="note-body">
          <textarea value={desc} placeholder="Start writing..." onChange={handleDesc} onBlur={handleDesc}></textarea>
        </div>} */}
    </div>
  )
}



export default Note
