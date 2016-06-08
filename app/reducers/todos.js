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
    case 'TOGGLE_COMPLETED':
      return [
        ...state.slice(0, action.index),
        {
          title: action.item.title,
          completed: !action.item.completed,
          added: action.item.added
        },
        ...state.slice(action.index + 1)
      ]
    case 'DELETE_TODO':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
