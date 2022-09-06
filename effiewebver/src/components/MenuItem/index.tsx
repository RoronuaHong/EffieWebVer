import React, { FC, ReactElement } from 'react'

import './index.scss'

interface IProps {
  children?: React.ReactNode

  //TODO: click的 ts 写法。
  onClick?: () => any
}

const MenuItem: FC<IProps> = ({
  onClick,
  children
}) => {
  return (
    <div className='menu-item-box' onClick={onClick}>
      {children}
    </div>
  )
}

export default MenuItem
