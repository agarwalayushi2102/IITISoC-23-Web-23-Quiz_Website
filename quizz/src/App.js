import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage11 from "./loginp/LoginPage11";
import Homepage from "./home/HomePage";
import FrameComponent from "./physic/frame-component";
import LISTOFTOPICSPAGEFORCHEM from "./chem/l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-c-h-e-m";
import LISTOFTOPICSPAGEFORMATHS from"./math/l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-m-a-t-h-s";
import QuizPage from "./quizp/quiz-page";
import ProfilePage from "./prof/ProfilePage"
import { useEffect } from "react";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<LoginPage11 />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/physics" element={<FrameComponent />}/>
      <Route path="/chem" element={<LISTOFTOPICSPAGEFORCHEM/>}/>
      <Route path="/math" element={<LISTOFTOPICSPAGEFORMATHS/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
<Route path="/quiz" element={<QuizPage/>}/>

    </Routes>
  );
}

export default App;
