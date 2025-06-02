import Home from "./Home/Home";

import CreateAccount from './CreateAccount/CreateAccount'; 
import EmailVerification from './EmailVerification/EmailVerification'; 
import LoginPage from './LoginPage/LoginPage'; 
import ForgetPassword from './ForgetPassword/ForgetPassword'; 
import ResetPassword from './ResetPassword/ResetPassword'; 

import FindEmp from "./FindEmp/FindEmp";
import FindJob from "./FindJob/FindJob";
import JobPortal from "./FindJob/JobPortal";
import JobDetailsPage from "./SingleJob/SingleJob";
import JobPortalwithFiltering from "./FindJob/Filtering";


import JobDetailsPagewithForm from "./SingleJob/SingleJobWithForm";


import './App.css'
import { Routes, Route,Navigate  } from 'react-router-dom';

import Dashboard from './Settings/Dashboard'
import FaveJ from './Jobs/fave-Jobs'
import Jobs from './Jobs/Jobs';



import AboutPage from './pages/aboutUs';
import PostPage from './pages/postPage';
import ContactQNAPage from './pages/contact-qnaPage';
import ContactPage from './pages/contactPage';
import NotFound from './pages/notFound';
import TermsAndConditions from './Components/terms';
import UnderConstructionPage from './pages/underConstraction';
import BlogPage from './pages/blogPage';
import { useContext } from 'react';
import { AuthContext } from './backend_integration/AuthContext';


/*

import { useState, useEffect } from 'react';
import Login from './backend_integration/Login';
import { getMe } from './backend_integration/api';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getMe(token)
        .then(res => {setUser(res.data);setToken(localStorage.getItem('token') || '');})
        .catch(() => {
          setToken('');
          localStorage.removeItem('token');
        });
    }
  }, [token]);
  const handleLogout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');

    // Optional: notify backend to clear refresh_token cookie
    fetch('http://localhost:8000/logout', {
      method: 'POST',
      credentials: 'include'
    });
  };
  return (
    <>
      {user ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <h2>Welcome, {user.full_name}</h2>
        </div>
      ) : (
        <Login setToken={setToken} />  
      )}
    </>
  );
}

export default App;


*/
 const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/LoginPage" />;
};




function App() {
  const { token, user } = useContext(AuthContext);
 
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/FindEmp" element={<FindEmp />} />
        <Route path="/FindJob" element={<FindJob />} />
        <Route path="/JobPortal" element={<JobPortal />} />
        <Route path="/JobPortalwithFiltering" element={<JobPortalwithFiltering />} />
        <Route path="/JobDetailsPage" element={<JobDetailsPage />} />

        <Route path="/JobDetailsPagewithForm" element={<JobDetailsPagewithForm />} />

        <Route path="/settings" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
        <Route path="/favorite-jobs" element={<FaveJ />} />
        <Route path="/jobs" element={<Jobs />} />
        

        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/single-blog" element={<PostPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-qna" element={<ContactQNAPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/under-constraction" element={<UnderConstructionPage />} />

      </Routes>
  )
}

export default App
