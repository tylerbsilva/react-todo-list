export function addToDo(item) {
  return {
    type: 'ADD_TODO',
    item
  }
}
export function deleteToDo(index) {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export function markCompleted(item, index) {
  return {
    type: 'TOGGLE_COMPLETED',
    item,
    index
  }
}
