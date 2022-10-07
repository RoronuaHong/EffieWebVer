export interface effieState {
  effieInfo: {
    mode: string,
    allNotes: {
      id: string,
      desc: string,
      cate: string,
      createdAt: Number,
      updatedAt: Number
    }[],
    docboxList: {
      id: string,
      desc: string,
      cate: string,
      createdAt: Number,
      updatedAt: Number
    }[],
    effieList: {
      id: string,
      desc: string,
    }[],
  },
  setEffieInfo: Function
}

export const initialEffieState: effieState = {
  effieInfo: {
    mode: 'light',
    allNotes: [{
      id: ``,
      cate: 'all-note',
      desc: ``,
      createdAt: 0,
      updatedAt: 0
    }],
    docboxList: [{
      id: ``,
      cate: 'docbox',
      desc: ``,
      createdAt: 0,
      updatedAt: 0
    }],
    effieList: []
  },
  setEffieInfo: () => {}
}





