import React from "react";
import EventsExample from "./components/EventsExample.tsx";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import UserPage from "./components/UserPage.tsx";
import TodosPage from "./components/TodosPage.tsx";
import UserItemPage from "./components/UserItemPage.tsx";
import TodoItemPage from "./components/TodoItemPage.tsx";

const App = () => {

  

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
        <Route path="/" element={<EventsExample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
