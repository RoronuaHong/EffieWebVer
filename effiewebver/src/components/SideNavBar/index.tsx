import React, { FC, ReactElement, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faSearch, faBook, faEnvelope, faExclamation, faDownload } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import './index.scss'

interface IProps {
  x: number,
  y: number,
  showMenu: boolean 
}

interface IState {
  visible: boolean
}

class SideNavBar extends React.Component<IProps, IState> {
  props = {
    x,
    y,
    showMenu
  }

  state = {
    visible: false
  }

  componentDidMount() {
    // 添加右键点击、点击事件监听
    
  }

  componentWillUnmount() {
    
  }

  handleCreateNote = () => {
    console.log(`新建文稿`)
  }

  onHandleSearch = () => {
    console.log(`搜索`)
  }

  onShowSwitch = () => {
    console.log(`切换外观`)
  }

  render() {
    const {
      visible
    } = this.state

    return (
      <div className="sidenavbar">
        <div className="sidenavbar-top">
          <div className="sidenavbar-top-create-notes">
            <div className="create-note-btn" onClick={this.handleCreateNote}>
              <FontAwesomeIcon className="icon" icon={faPlus} />
              <div className="title">
                新建文稿
              </div>
            </div>
          </div>
          <div className="sidenavbar-top-menu-item">
            <div className="search-div">
              <div className="search" onClick={this.onHandleSearch}>
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
                  <FontAwesomeIcon className="icon" icon={faDownload} />
                  文稿箱
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidenavbar-bottom">
          <div className="sidenavbar-bottom-switch"
            onClick={this.onShowSwitch}>
            <FontAwesomeIcon className="icon" icon={faExclamation} />
            外观切换
          </div>
        </div>
        <div>
          {visible && <div className="contextMenu-option">输入文字</div>}
        </div>
      </div>
    )
  }
}

export default SideNavBar
