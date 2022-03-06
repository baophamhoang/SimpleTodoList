import {addTodos, typeTodo} from './actions';

const initialState = {
    filters: {
        searchFilter: '',
        statusFilter: 'All',
        priorityFilter: []
    }, 
    todos: [
        {
            id: 0,
            name: 'Learn Yoga',
            completed: false,
            priority: 'Low'
        },
        {
            id: 1,
            name: 'Learn React',
            completed: true,
            priority: 'High'
        }
    ]
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'todolist/addTodos':
            return {
                ...state,
                todos: [...state.todos, actions.payload]
            }
        case 'todolist/setCompleted':
            const newTodos = [...state.todos];
            const e = newTodos.find(todo=>todo.id===actions.payload);
            e.completed = !e.completed;
            return {
                ...state,
                todos: newTodos
            };
        case 'filter/searchFilter':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchFilter: actions.payload                    
                }

            }
        case 'filter/statusFilter':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    statusFilter: actions.payload
                }
            }
        case 'filter/priorityFilter':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priorityFilter: actions.payload
                }
            }
        default: return state;
    }

}

export default reducer;