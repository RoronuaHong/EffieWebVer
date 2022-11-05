import { EventHandler, FC, ReactElement, useEffect, useState } from 'react'

// export interface IVirtualTreeProps {
//   data: {
//     key: string
//     label: string
//     icon: string
//     title: string
//     // children?: Array<ITreeNodeProps>
//     children?: {
//       key: string
//       label: string
//       icon: string
//       title: string
//     }[]
//   }[],
//   onChildVisible?: Function
// }

// export interface ITreeNodeProps {
//   node: {
//     key: string
//     label: string
//     icon: string
//     title: string
//     // children?: Array<ITreeNodeProps>
//     children?: {
//       key: string
//       label: string
//       icon: string
//       title: string
//     }[]
//   },
//   onChildVisible?: Function
// }


export type TVirtualTree = IVirtualTreeProps<UserItem[]>
export type TTreeNode = ITreeNodeProps<UserItem[]>

export interface UserItem {
  key: string
  label: string
  icon: string
  title: string
}

export interface IVirtualTreeProps<T> {
  data: {
    key: string
    label: string
    icon: string
    title: string
    children?: T
  }[],
  onChildVisible?: Function
}

export interface ITreeNodeProps<T> {
  node: {
    key: string
    label: string
    icon: string
    title: string
    children?: T
  },
  onChildVisible?: Function
}

// {
//   export type UserPageResult = PageResult<UserItem[]>;
//   export interface PageResult<T> {
//     list?: T;
//     rows?: T;
//     total?: number;
//     msg: string;
//     code: number;
//   }
  
//   export interface UserItem {
//     id: string;
//     username: string;
//     nickname: string;
//     mobile: string;
//     gender: number;
//     avatar: string;
//     email: string;
//     status: number;
//     deptName: string;
//     roleNames: string;
//     createTime: string;
//   }
// }

/* TODO: 将 VirtualTree 和 TreeNode 分开写 */
const VirtualTree: FC<TVirtualTree> = ({
  data,
  onChildVisible
}): ReactElement => {
  return (
    <div className='v-tree'>
      <ul className='v-tree-ul'>
        {data.map(tree => {
          return (
            <TreeNode node={tree} key={tree.key} 
              onChildVisible={onChildVisible} 
            />
          )
        })}
      </ul>
    </div>
  )
}


// FIXME: 1. 修复TS的Bug。
// FIXME: 2. 完成树形结构的异步加载。
// const TreeNode: FC<TTreeNode> = ({ 
//   node, 
//   // onChildVisible 
// }) => {
const TreeNode = ({ 
  node, 
  onChildVisible 
}) => {
  const [childVisible, setChildVisible] = useState(false)
  const hasChild = node.children ? true : false


  useEffect(() => {

  })


  // console.log(node.children)

  return (
    <div className='v-tree-node'>
      <div className='d-flex' 
        // onClick={e => onChildVisible(node, setChildVisible)}
      >
        {hasChild && (
          <div className={`v-tree-toggler ${childVisible ? 'active' : ''}`}></div>
        )}
        <div className='v-tree-head'>
          <i className={`mr-1 ${node.icon}`}></i>
          {node.label}
        </div>
      </div>
      <>
        {hasChild && childVisible && <div className="v-tree-content">
          <ul className="v-tree-container">
            {/* FIXME: 处理 interface 部分 */}
            <VirtualTree data={node.children} 
              onChildVisible={onChildVisible} 
            />
          </ul>
        </div>}
      </>
    </div>
  )
}


export default VirtualTree

