import { FC, ReactElement, useState, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlus, faTrashCan, faSearch, 
  faBook, faEnvelope, faExchange, 
  faDownload, faBriefcase , faUpload 
} from '@fortawesome/free-solid-svg-icons'

import { NavLink, useLocation } from 'react-router-dom'

import useRightClickMenu from 'hooks/useRightClickMenu'
import { EffieContext } from 'context/EffieContext'

import { loadJsonOrTxt, downloadJsonOrTxt } from 'utils/txtFn'

import Menu from 'components/Menu'
// import VirtualTree from 'components/Tree'
import VirtualTree from 'components/VirtualTree'

import './index.scss'

const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
      },
    //   {
    //     key: "0-0",
    //     label: "Document 1-1",
    //     icon: "fa fa-folder",
    //     title: "Documents Folder",
    //     children: [
    //       {
    //         key: "0-1-1",
    //         label: "Document-0-1.doc",
    //         icon: "fa fa-file",
    //         title: "Documents Folder",
    //         children: [
    //           {
    //             key: "1-0",
    //             label: "Document 1-0",
    //             icon: "fa fa-folder",
    //             title: "Documents Folder-0"
    //           }
    //         ]
    //       },
    //       {
    //         key: "0-1-2",
    //         label: "Document-0-2.doc",
    //         icon: "fa fa-file",
    //         title: "Documents Folder",
    //       },
    //       {
    //         key: "0-1-3",
    //         label: "Document-0-3.doc",
    //         icon: "fa fa-file",
    //         title: "Documents Folder",
    //       },
    //       {
    //         key: "0-1-4",
    //         label: "Document-0-4.doc",
    //         icon: "fa fa-file",
    //         title: "Documents Folder",
    //       },
    //     ],
    //   },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    children: [
    //   {
    //     key: "1-0",
    //     label: "document1.doc",
    //     icon: "fa fa-file",
    //     title: "Documents Folder",
    //   },
    //   {
    //     key: "0-0",
    //     label: "documennt-2.doc",
    //     icon: "fa fa-file",
    //     title: "Documents Folder",
    //   },
    ]
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
]

export interface IProps {
  
}

const SideNavBar: FC<IProps> = (): ReactElement => {
  const location = useLocation()

  const [visible, setVisible] = useState(false)
  const { x, y, showMenu } = useRightClickMenu()
  const { effieInfo, setEffieInfo } = useContext(EffieContext)

  const handleCreateNote = () => {

    // TODO: 新建文稿箱部分。
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
    downloadJsonOrTxt('EffieWebData.json', JSON.stringify({ ...effieInfo }))
 
    console.log(`保存Data中...`)
  }

  const onLoadSwitch = async () => {
    const info = (await loadJsonOrTxt())
    const infoJson = JSON.parse(info)

    setEffieInfo(infoJson)

    console.log(`载入Data中...`)
  }

  const onShowSwitch = () => {
    const data = effieInfo

    data.mode = data.mode === `light` ? `dark` : `light`

    // TODO: 完成mode修改
    setEffieInfo({ ...data })
  }

  const handleChildVisible = (node, setChildVisible) => {
    // console.log(node)

    if(!node.children || node.children.length === 0) {
      console.log(`异步加载data...`)
      
    }
  }

  return (
    <div className='sidenavbar'>
      <Menu x={x} y={y} showMenu={showMenu} />
      <div className='sidenavbar-top'>
        <div className='sidenavbar-top-create-notes'>
          <div className='create-note-btn' onClick={handleCreateNote}>
            <FontAwesomeIcon className='icon' icon={faPlus} />
            <div className='title'>
              新建文稿
            </div>
          </div>
        </div>
        <div className='sidenavbar-top-menu-item'>
          <div className='search-div'>
            <div className='search' onClick={onHandleSearch}>
              <FontAwesomeIcon className='icon' icon={faSearch} />
              搜索
            </div>
          </div>
          <ul>
            <li>
              <NavLink to='all-notes'>
                <FontAwesomeIcon className='icon' icon={faBook} />
                全部
              </NavLink>
            </li>
            <li>
              <NavLink to='intro'>
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                Effie介绍
              </NavLink>
            </li>
            <li>
              <NavLink to='trash'>
                <FontAwesomeIcon className='icon' icon={faTrashCan} />
                废纸篓
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='sidenavbar-middle-menu-item'>
          <ul>
            <li>
              <NavLink to='docbox'>
                <FontAwesomeIcon className='icon' icon={faBriefcase} />
                文稿箱
              </NavLink>
            </li>
          </ul>
          {/* TODO: 完成VirtualTree的 */}
          {/* <VirtualTree data={treeData} /> */}
          <VirtualTree data={treeData}
            // onChildVisible={handleChildVisible}
          />
        </div>
      </div>
      <div className='sidenavbar-bottom'>
        <div className='sidenavbar-bottom-switch'
          onClick={onSaveSwitch}>
          <FontAwesomeIcon className='icon' icon={faDownload} />
          保存
        </div>
        <div className='sidenavbar-bottom-switch'>
          {/* onClick={onLoadSwitch}>  */}
          <input className='sidenavbar-switch-input' type='file' id='file' onChange={onLoadSwitch}/>
          <FontAwesomeIcon className='icon' icon={faUpload} />
          载入
        </div>
        <div className='sidenavbar-bottom-switch'
          onClick={onShowSwitch}>
          <FontAwesomeIcon className='icon' icon={faExchange} />
          外观切换
        </div>
      </div>
      <div>
        {visible && <div className='contextMenu-option'>输入文字</div>}
      </div>
    </div>
  )
}


export default SideNavBar
