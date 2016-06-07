export const ADD_TODO = 'ADD_TODO'
function addToDo(payload) {
  return {
    type: 'ADD_TODO',
    payload
  }
}
