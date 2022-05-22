import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App';
import TodoList from './components/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='todos' element={<TodoList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
);

