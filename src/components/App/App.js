import { NavLink, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Tweets } from '../../pages/Tweets/Tweets';

function App() {
  return (
    <div>
      <nav className="nav">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/tweets">
          Tweets
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
