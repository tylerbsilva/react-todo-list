export function addToDo(item) {
  console.log('ADD_TODO_FIRING', item)
  return {
    type: 'ADD_TODO',
    item
  }
}
