import { useSelector } from "react-redux";
import {
    todoListSelector,
    filterListSelector
} from "../../redux/selectors"
import Todo from "../Todo";
import {useEffect} from 'react'

export default function FilteredList(){
    
    const SEARCH_FILTER_MAP = (e) => e.name.toLowerCase().includes(filterList.searchFilter.toLowerCase());
    const STATUS_FILTER_MAP = {
        All: ()=> true,
        Completed: (todo)=>todo.completed,
        Todo: (todo)=>!todo.completed
    }
    const PRIORITY_FILTER_MAP = (e) =>
        filterList.priorityFilter.length>0?    
        filterList.priorityFilter.includes(e.priority): e;
    const todoList = useSelector(todoListSelector);
    const filterList = useSelector(filterListSelector);
    
    let filteredList = todoList
        .filter(STATUS_FILTER_MAP[filterList.statusFilter]) 
        .filter(SEARCH_FILTER_MAP)
        .filter(PRIORITY_FILTER_MAP);
    

    return filteredList.map(todo =>
        <Todo 
        name={todo.name} 
        priority={todo.priority} 
        checked={todo.completed}
        key={todo.id}
        idNo={todo.id}
        />)
}