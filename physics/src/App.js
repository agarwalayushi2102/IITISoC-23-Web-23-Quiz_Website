import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/frame-component";
import { useEffect } from "react";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
    </Routes>
  );
}
export default App;
