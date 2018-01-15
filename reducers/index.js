const ReducerDefaultState = [];

// redux-persist will not work unless I name a const here. It did not work when I 
// put export default without the const deckReducer.
const Reducer = (state = ReducerDefaultState, action = {}) => {
  switch(action.type) {
    case 'DUMMY':
      return [...state, action]
    default:
      return state;
  }
}

export default Reducer;