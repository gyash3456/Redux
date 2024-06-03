import React from "react";
import { useDispatch } from "react-redux";

const Todo = (props) => {
    const dispatch = useDispatch();
    const handleCheckboxClick = (id) => {
        const payload = {
            id: id,
            isCompleted: !props.todo.isCompleted,
        };
        dispatch({ type: "UPDATE_TODO_ASYNC", payload });
    };
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: {
                id,
            },
        });
    };
    return (
        <div>
            <input
                type="checkbox"
                checked={props.todo.isCompleted}
                onChange={() => {
                    handleCheckboxClick(props.todo.id);
                }}
            />
            {props.todo.text}
            <button
                onClick={(e) => {
                    handleDelete(props.todo.id);
                }}
            >
                Delete Todo
            </button>
        </div>
    );
};

export default Todo;
