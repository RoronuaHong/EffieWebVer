import React, { FC, ReactElement } from 'react'

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
      height: 120,
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

  return (
    <div className="menu" style={style() as React.CSSProperties}>
      
    </div>
  )
}

export default Menu
