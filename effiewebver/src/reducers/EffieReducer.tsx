import { effieState } from 'store'

export type effieAction = {
  type: ''
}

export type Dispatcher = (action: effieAction) => any
export interface effieContext {
  state: effieState
  dispatch: Dispatcher
}

const EffieReducer = (state: effieState, action: effieAction) => {
  // FIXME: 将state变成可以以数组形式完成。
  // let effieState = [...state]

  switch(action.type) {      
    default:
      return state
  }
}

export default EffieReducer



