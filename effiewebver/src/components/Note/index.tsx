import React, { useContext } from 'react'
import { EffieContext } from '../../context/EffieContext'
import { useLocation } from 'react-router-dom'

import './index.scss'

const Note = () => {
  const { effieInfo, setEffieInfo } = useContext(EffieContext)
  const location = useLocation()
  
  let list = [] as any

  const {
    allNotes
  } = effieInfo

  // TODO: 完成 textarea 的更新。
  const handleDesc = (id: string, desc: string) => {
    // setEffieInfo

    // FIXME: 完成desc的输入输出。
    // setEffieInfo({
    //   ...effieInfo,
    //   allNotes: 
    // })

    // effieInfo.allNotes.map(item => {
    //   if(item.id === id) {
    //     item.desc = desc

    //     console.log(item.desc)
    //   }
    // })

    console.log(12345)
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

  if(location.pathname.indexOf(`all-notes`) > - 1) {
    list = effieInfo.allNotes
  } else if(location.pathname.indexOf(`intro`) > -1) {
    list = effieInfo.effieList
  }

  return (
    <div className="note">  
      {list.length === 0 && <div className="note-content">
        <div className="note-empty-content">
          <div className="note-title">
            没有选中的文稿
          </div>
          <div className="new-note-btn" onClick={handleCreateNote}>
            新建文稿
          </div>
        </div>
      </div>}

      {list.length > 0 &&
        list.map(item => {
          if(item.id === location.pathname.split('/')[2]) {
            return (
              <div className="note-body" key={item.id}>
                <textarea 
                  value={item.desc}
                  placeholder="Start writing..."
                  onChange={e => handleDesc(item.id, item.desc)} 
                  onBlur={e => handleDesc(item.id, item.desc)}>
                </textarea>
              </div>
            )
          }

          return []
        })}
    </div>
  )
}



export default Note
