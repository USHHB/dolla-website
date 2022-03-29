import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
