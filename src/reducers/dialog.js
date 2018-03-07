export default (state = {isOpen: false}, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return {
        isOpen: true,
        item: action.payload
      }
    case 'CLOSE_DIALOG':
      return {
        isOpen: false
      }
    default:
      return state;
  }
}
