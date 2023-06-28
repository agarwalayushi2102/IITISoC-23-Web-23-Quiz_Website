import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage11 from "./pages/LoginPage11";
import { useEffect } from "react";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<LoginPage11 />} />
    </Routes>
  );
}

export default App;
