import { FC, ReactElement, useState } from 'react'

export interface IProps {
  data: {
    key: string
    label: string
    icon: string
    title: string
    children: {
      key: string
      label: string
      icon: string
      title: string
    }[]
  }[]
}

const VirtualTree: FC<IProps> = ({
  data
}): ReactElement => {
  return (
    <div className='d-tree'>
      <ul className='d-flex d-tree-container flex-colum'>
        {data.map(tree => <TreeNode node={tree} key={tree.key} />)}
      </ul>
    </div>
  )
}


const TreeNode = ({ node }) => {
  const [childVisible, setChildVisible] = useState(false)
  const hasChild = node.children ? true : false

  console.log(node.children)

  return (
    <li className='d-tree-node border-0'>
      <div className='d-flex' onClick={e => setChildVisible(v => !v)}>
        {hasChild && (
          <div className={`d-inline d-tree-toggler ${childVisible ? 'active' : ''}`}></div>
        )}
        <div className='col d-tree-head'>
          <i className={`mr-1 ${node.icon}`}></i>
          {node.label}
        </div>
      </div>
      <>
        {hasChild && childVisible && <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <VirtualTree data={node.children}  />
          </ul>
        </div>}
      </>
    </li>
  )
}


export default VirtualTree


