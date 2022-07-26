import React, { FC, ReactElement } from 'react'

interface IProps {
  title: string
}

const NoteList: FC<IProps> = ({
  
}): ReactElement => {
  return (
    <div className="note-list">
      NoteList
    </div>
  )
}

export default NoteList
