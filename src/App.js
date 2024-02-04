import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from "./view/homepage/Homepage.jsx";
import {Navbar} from './view/navbar/Navbar';
import LoginPage from "./view/login/loginPage";
import SignUpPage from "./view/login/signUpPage";
import ProfilePage from "./view/profile/profilePage.jsx";
import ProtectedRoute from "./logic/ProtectedRoute.jsx";
import ContactPage from "./view/contact/ContactPage.jsx";
import QuestionPage from "./view/questions/QuestionPage.jsx";
import QuestionsListPage from "./view/questions/QuestionsListPage.jsx";




function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/signup" element={ <SignUpPage />} />
        <Route path="/contact" element={ <ContactPage />} />
        <Route path="/question" element={ <QuestionPage />} />
        <Route element={<ProtectedRoute redirectTo="/" />}>
          <Route path="/profile" element={ <ProfilePage />} />
          <Route path="/questions" element={ < QuestionsListPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
