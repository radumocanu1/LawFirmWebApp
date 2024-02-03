import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from "./view/homepage/Homepage.jsx";
import {Navbar} from './view/navbar/Navbar';
import LoginPage from "./view/login/loginPage";
import SignUpPage from "./view/login/signUpPage";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/signup" element={ <SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
