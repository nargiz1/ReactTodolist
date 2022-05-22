import './App.css';
import { Link, Outlet } from "react-router-dom";
import './index.css'

function App() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="todos">ToDos</Link>
          </li>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <div className='content-wrapper'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
