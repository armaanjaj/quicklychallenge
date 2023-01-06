import './App.css';
import {BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";

// Application pages
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Router>
				<Routes>
					<Route path="*" element={<Login />} />
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
    </>
  );
}

export default App;
