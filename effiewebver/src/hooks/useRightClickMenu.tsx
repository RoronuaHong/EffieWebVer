import { useState, useEffect } from 'react'
import jquery from 'jquery'

const $: JQueryStatic = jquery

const useRightClickMenu = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault()

    if($(e.target as Element).attr('class') === 'sidenavbar-top' || $(e.target as Element).attr('class') === 'note-list-body') {
      setX(e.pageX)
      setY(e.pageY)

      setShowMenu(true)
    }
  }

  const handleClick = () => {
    showMenu && setShowMenu(false)
  }

  useEffect(() => {
    document.addEventListener(`click`, handleClick)
    document.addEventListener(`contextmenu`, handleContextMenu)

    return () => {
      document.removeEventListener(`click`, handleClick)
      document.removeEventListener(`contextmenu`, handleContextMenu)
    }
  })

  return { x, y, showMenu }
}

export default useRightClickMenu
