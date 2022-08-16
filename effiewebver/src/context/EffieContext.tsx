import { FC, createContext, useState, useReducer } from 'react'

import Reducer, { StateData, EffieReducer } from '../reducers/EffieReducer'

export const EffieContext = createContext(null)

const initialState: StateData  = []

interface IProps {
  children?: React.ReactNode
}

// children?: React.ReactNode;

export const EffieContextProvider: FC<IProps> = ({ children }) => {
  const [EffieInfo, setEffieInfo] = useState({

  })

  const [Effie, EffieDispatch] = useReducer<EffieReducer>(Reducer, initialState)

  return (
    // <EffieContext.Provider value={{ 
    //   EffieInfo, setEffieInfo,
    //   mocksState: Effie, EffieDispatch }}>
    //   {children}
    // </EffieContext.Provider>
    
    <EffieContext.Provider value={{ 
      EffieInfo, setEffieInfo,
      mocksState: Effie, EffieDispatch }}>
      {children}
    </EffieContext.Provider>
  )
}






