function shots(state = [], action) {
  switch(action.type) {
    case 'RECIVE_SHOTS':
      return [...state, ...action.data];
    case 'SHOTS_FETCHED':
    default:
      return state;
  }
}

export default shots;
