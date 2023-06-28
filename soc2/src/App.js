import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import QuizPage from "./pages/quiz-page";
import { useEffect } from "react";

function App() {
 
    
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
    </Routes>
  );
}
export default App;
