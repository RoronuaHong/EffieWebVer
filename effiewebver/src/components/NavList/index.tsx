import { FC, ReactElement } from 'react'

import './index.scss'

interface IProps {

}

let list = [{
  id: 0,
  name: '文件(F)',
  sList: []
}, {
  id: 1,
  name: '编辑(E)',
  sList: []
}, {
  id: 2,
  name: '标记(M)',
  sList: []
}, {
  id: 3,
  name: '查看(V)',
  sList: []
}, {
  id: 4,
  name: '帮助(H)',
  sList: []
}]

const NavList: FC<IProps> = (): ReactElement => {
  return (
    <div className='nav-wrap'>
      <div className='hide-bar'>
        {`＜`}
      </div>
      <div className='nav-list'>
        {list.map(item => (
          <div className='nav-li'>{item.name}</div>
        ))}
      </div>
    </div>
  )
}



export default NavList
