import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import CodePage from "./pages/CodePage";
import Blog from "./components/Blog";
import BlogContent from './components/BlogContent'
import Pricing from "./pages/Pricing";
import { history } from "./helpers";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
      <Route
        path="/code"
        element={
          <PrivateRoute>
            <CodePage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetail" element={<BlogContent />} />
      <Route path="/pricing" element={<Pricing />} />


      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
