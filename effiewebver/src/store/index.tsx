export interface effieState {
  effieInfo: {
    mode: string,
    allNotes: {
      id: string,
      desc: string,
      createdAt: Number,
      updatedAt: Number
    }[],
    effieList: {
      id: string,
      desc: string,
    }[]
  },
  setEffieInfo: Function
}

export const initialEffieState: effieState = {
  effieInfo: {
    mode: 'light',
    allNotes: [{
      id: ``,
      desc: ``,
      createdAt: 0,
      updatedAt: 0
    }],
    effieList: []
  },
  setEffieInfo: () => {}
}





