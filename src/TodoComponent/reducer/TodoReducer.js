export const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, action.payload];

        case "UPDATE_TODO":
            return todos.map((todo, index) => {
                if (action.payload.id == todo.id) {
                    todo.isCompleted = action.payload.isCompleted;
                }
                return todo;
            });
        case "DELETE_TODO":
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
};
