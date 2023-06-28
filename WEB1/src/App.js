import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LoginPage1 from "./pages/LoginPage1";
import { useEffect } from "react";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/login-page-1" element={<LoginPage1 />} />
    </Routes>
  );
}
export default App;
