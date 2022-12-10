import Homepage from "./components/Homepage"
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login"
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
