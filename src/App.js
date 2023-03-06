import './App.css';
import LoginPage from './Components/LoginPage';
import { Routes, Route } from "react-router-dom";
import ProfileListingPage from './Components/ProfileListingPage';
import ProfileDetailPage from './Components/ProfileDetailPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profileListingPage" element={<ProfileListingPage />} />
        <Route path="/profileDetailPage" element={<ProfileDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
