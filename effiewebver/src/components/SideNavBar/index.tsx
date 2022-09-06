import React, { FC, ReactElement, useState, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faSearch, faBook, faEnvelope, faExchange, faDownload, faBriefcase , faUpload } from '@fortawesome/free-solid-svg-icons'

import { NavLink, useLocation } from 'react-router-dom'

import Menu from '../Menu'
import useRightClickMenu from '../../hooks/useRightClickMenu'
import { EffieContext } from '../../context/EffieContext'

import './index.scss'

export interface IProps {
  
}

const SideNavBar: FC<IProps> = (): ReactElement => {
  const location = useLocation()

  const [visible, setVisible] = useState(false)
  const { x, y, showMenu } = useRightClickMenu()
  const { effieInfo, setEffieInfo } = useContext(EffieContext)

  const handleCreateNote = () => {
    if(location.pathname.indexOf(`all-notes`) > -1) {
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
  }

  const onHandleSearch = () => {
    console.log(`搜索`)
  }

  const onSaveSwitch = () => {
    console.log(`保存json`)
  }

  const onLoadSwitch = () => {
    console.log(`载入json`)
  }

  const onShowSwitch = () => {
    const data = effieInfo

    data.mode = data.mode === `light` ? `dark` : `light`

    // TODO: 完成mode修改
    setEffieInfo({ ...data })
  }

  return (
    <div className="sidenavbar">
      <Menu x={x} y={y} showMenu={showMenu} />
      <div className="sidenavbar-top">
        <div className="sidenavbar-top-create-notes">
          <div className="create-note-btn" onClick={handleCreateNote}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
            <div className="title">
              新建文稿
            </div>
          </div>
        </div>
        <div className="sidenavbar-top-menu-item">
          <div className="search-div">
            <div className="search" onClick={onHandleSearch}>
              <FontAwesomeIcon className="icon" icon={faSearch} />
              搜索
            </div>
          </div>
          <ul>
            <li>
              <NavLink to="all-notes">
                <FontAwesomeIcon className="icon" icon={faBook} />
                全部
              </NavLink>
            </li>
            <li>
              <NavLink to="intro">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                Effie介绍
              </NavLink>
            </li>
            <li>
              <NavLink to="trash">
                <FontAwesomeIcon className="icon" icon={faTrashCan} />
                废纸篓
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidenavbar-middle-menu-item">
          <ul>
            <li>
              <NavLink to="docbox">
                <FontAwesomeIcon className="icon" icon={faBriefcase} />
                文稿箱
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidenavbar-bottom">
        <div className="sidenavbar-bottom-switch"
          onClick={onSaveSwitch}>
          <FontAwesomeIcon className="icon" icon={faDownload} />
          保存
        </div>
        <div className="sidenavbar-bottom-switch"
          onClick={onLoadSwitch}>
          <FontAwesomeIcon className="icon" icon={faUpload} />
          载入
        </div>
        <div className="sidenavbar-bottom-switch"
          onClick={onShowSwitch}>
          <FontAwesomeIcon className="icon" icon={faExchange} />
          外观切换
        </div>
      </div>
      <div>
        {visible && <div className="contextMenu-option">输入文字</div>}
      </div>
    </div>
  )
}

export default SideNavBar