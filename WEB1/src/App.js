import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

import { useEffect } from "react";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
       
    </Routes>
  );
}
export default App;
