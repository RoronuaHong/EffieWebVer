import React from 'react'

import './index.scss'

const Note = () => {
  const handleCreateNote = () => {
    console.log(`新建文稿`)
  }

  return (
    <div className="note">  
      <div className="note-content">
        <div className="note-empty-content">
          <div className="note-title">
            没有选中的文稿
          </div>
          <div className="new-note-btn" onClick={handleCreateNote}>
            新建文稿
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
