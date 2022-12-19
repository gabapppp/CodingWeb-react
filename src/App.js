import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Homepage from "./app/pages/Homepage"
import Login from "./app/pages/Login"
import SignUp from "./app/pages/SignUp";
import CodePage from "./app/pages/CodePage";

function App() {
  return (
    <Routes >
      <Route path="/" element={
        <Homepage />
      } />
      <Route path="/coding" element={<CodePage />} />
      < Route path="/login" element={< Login />} />
      < Route path="/signup" element={< SignUp />} />
      < Route path="*" element={< Navigate to="/" />} />
    </Routes >
  );
}

export default App;
