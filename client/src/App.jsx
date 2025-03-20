import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Users from "./pages/Users";
import LatestPosts from "./pages/LatestPosts";
import PopularPosts from "./pages/PopularPosts";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/latest" element={<LatestPosts />} />
            <Route path="/popular" element={<PopularPosts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
