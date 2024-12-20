import React, { useEffect } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./List.tsx";
import TodoItem from "./TodoItem.tsx";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodosPage;
