import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";

import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UserPage from "./components/UserPage";
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/todos">Дела</NavLink>

    </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
