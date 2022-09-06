import React, { FC, ReactElement } from 'react'
import MenuItem from '../MenuItem'

import './index.scss'
interface IProps {
  x: number,
  y: number,
  showMenu: boolean
}

const Menu: FC<IProps> = ({
  x,
  y,
  showMenu
}): ReactElement => {
  const style = () => {
    return {
      with: 120,
      top: y,
      left: x,
      color: '#222',
      borderRadius: 1,
      position: 'absolute',
      flexDirection: 'column',
      backgroundColor: '#fff',
      display: showMenu ? 'flex' : 'none'
    }
  }

  // TODO: 里面无法点击。
  const handleCreateNewFolder = () => {
    console.log(1)
  }

  const handleCreateNewDraft = () => {
    console.log(2)
  }

  return (
    <div className="menu"
      style={style() as React.CSSProperties}>
      <MenuItem onClick={handleCreateNewFolder}>
        新建文件夹...
      </MenuItem>
      <MenuItem onClick={handleCreateNewDraft}>
        新建文稿
      </MenuItem>
      <MenuItem>
        33333
      </MenuItem>
      <MenuItem>
        44444
      </MenuItem>
      <MenuItem>
        55555
      </MenuItem>
    </div>
  )
}

export default Menu
