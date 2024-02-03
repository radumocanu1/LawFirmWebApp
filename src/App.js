import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from "./view/homepage/Homepage.jsx";
import {Navbar} from './view/navbar/Navbar';
import LoginPage from "./view/login/loginPage";
import SignUpPage from "./view/login/signUpPage";
import ProfilePage from "./view/profile/profilePage.jsx";
import ProtectedRoute from "./logic/ProtectedRoute.jsx";
import ContactPage from "./view/contact/ContactPage.jsx";



function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/signup" element={ <SignUpPage />} />
        <Route path="/contact" element={ <ContactPage />} />
        <Route element={<ProtectedRoute redirectTo="/" />}>
          <Route path="/profile" element={ <ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
