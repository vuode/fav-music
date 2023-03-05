import {useEffect, useState} from 'react'
import {View} from '../common/types'
import {useWindowWidth} from './useWindowWidth'

export const useView = () => {
  const width = useWindowWidth()

  const [view, setView] = useState(View.List)
  const [displayViewToggle, setDisplayViewToggle] = useState(width < 900)

  useEffect(() => {
    if (width < 900) {
      setView(View.List)
      setDisplayViewToggle(false)
    } else {
      setDisplayViewToggle(true)
    }
  }, [width])

  const handleViewToggle = () => {
    setView(view === View.List ? View.Grid : View.List)
  }

  return {view, displayViewToggle, handleViewToggle}
}
