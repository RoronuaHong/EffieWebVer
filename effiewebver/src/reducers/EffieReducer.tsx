// action-type的类型
const JSON_DOWNLOADED = 'JSON_DOWNLOADED'

// state的类型, action的类型
export type StateData = {

}

export type EffieAction = { 
  type?: typeof JSON_DOWNLOADED 
}

export type EffieReducer = React.Reducer<StateData, EffieAction>

const Reducer: EffieReducer = (state, action) => {
  // let effieState = [...state]

  switch(action.type) {      
    default:
      return state
  }
}

export default Reducer

