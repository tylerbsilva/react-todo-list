export default function todos(state=[], action){
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          title: action.item,
          completed: false,
          added: Date.now()
        }
      ]
    case 'MARK_COMPLETED':
    case 'DELETE_TODO':
    default:
      return state;
  }
}
