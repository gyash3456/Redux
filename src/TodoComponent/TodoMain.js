import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useState } from "react";

const TodoMain = () => {
    const todos = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState("");
    const createTodo = (text) => {
        const todoObj = {
            id: new Date().getTime(),
            text: text,
            isCompleted: false,
        };
        console.log("text", text);
        dispatch({ type: "ADD_TODO", payload: todoObj });
        setTodoText("");
    };
    return (
        <div>
            TodoComponent
            <input
                type="text"
                value={todoText}
                onChange={(e) => {
                    console.log(e.target.value);
                    setTodoText(e.target.value);
                }}
            />
            <button onClick={() => createTodo(todoText)}>Add Todo</button>
            {todos.map((todo, index) => {
                return !todo.isCompleted && <Todo key={todo.id} todo={todo} />;
            })}
            <div>Completed todos</div>
            {todos.map((todo, index) => {
                return todo.isCompleted && <Todo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default TodoMain;
//basic function of todo
//user can add todo which will be shown in todo list
//user can mark todo to be completed.
//completed will list will be shown in separate div.
//user can delete todo
//Solution
//There will be list of todo objects
//each to will have id=Date.now;
//for checkbox you will have isCompleted.
// const todo = {
//     id,
//     text,
//     isCompleted,
// };
//functions
//create todo to create the todo
//MarkTodoAs completed
//delete todo

//TodoComponent
//Todo
//inputbox
