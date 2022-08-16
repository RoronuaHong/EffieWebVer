import { FC, createContext, useState, useReducer } from 'react'

import Reducer, { StateData, EffieReducer } from '../reducers/EffieReducer'

interface IProps {
  children?: React.ReactNode
}

export interface EffieContext {
  EffieInfo: Object
  setEffieInfo: Function
  EffieDispatch: any
}

// children?: React.ReactNode;

const initialState: StateData  = []

export const EffieContext = createContext(initialState)

export const EffieContextProvider: FC<IProps> = ({ children }) => {
  const [EffieInfo, setEffieInfo] = useState({

  })

  const [Effie, EffieDispatch] = useReducer<EffieReducer>(Reducer, initialState)

  return (
    <EffieContext.Provider value={{
      EffieInfo, setEffieInfo,
      EffieState: Effie, EffieDispatch 
    }}>
      {children}
    </EffieContext.Provider>
  )
}






