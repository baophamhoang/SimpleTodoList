export const searchFilter = (payload) => {
    return {
        type: 'filter/searchFilter',
        payload
    }
}
export const statusFilter = (payload) => {
    return {
        type: 'filter/statusFilter',
        payload
    }
}
export const priorityFilter = (payload) => {
    return {
        type: 'filter/priorityFilter',
        payload
    }
}
export const addTodos = (payload) => {
    return {
        type: 'todolist/addTodos',
        payload
    }
}
export const setCompleted = (payload) => {
    return {
        type: 'todolist/setCompleted',
        payload
    }
}
