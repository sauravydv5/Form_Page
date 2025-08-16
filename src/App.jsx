import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Steps from "./components/common/Steps";
import LoginPage from "./components/Page/LoginPage";
import RegistrationPage from "./components/Registration/Registration";
import FormPage from "./components/Page/FormPage";
import PreviewPage from "./components/Page/PreviewPage";
import FinalSubmitPage from "./components/Page/FinalSubmitPage";
import ConfirmationPage from "./components/Page/ConfirmationPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import { generateAppNumber } from "./components/utils/generateAppNumber";
import Header from "./components/common/Header";
import StatusPage from "./components/common/StatusPage";
import ResetPassword from "./components/common/ResetPassword";

// Wrapper to handle Header visibility
function Layout({ children, auth }) {
  const location = useLocation();
  const noHeaderPaths = ["/", "/register"]; // hide header on these pages

  return (
    <div>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <div className="min-h-screen bg-white">{children}</div>
    </div>
  );
}

export default function App() {
  const [auth, setAuth] = useState(() => {
    // restore auth from localStorage
    return localStorage.getItem("auth") || null;
  });

  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [appNumber, setAppNumber] = useState("");

  // save auth in localStorage whenever it changes
  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", auth);
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  const handleFinalSubmit = () => {
    const unique = generateAppNumber();
    setAppNumber(unique);
    setSubmittedData(formData);
    return unique;
  };

  return (
    <Router>
      <Layout auth={auth}>
        {auth && !["/confirmation"].includes(window.location.pathname) && (
          <Steps />
        )}

        <Routes>
          <Route path="/" element={<LoginPage onDone={setAuth} />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/form" element={<FormPage onSave={setFormData} />} />
          <Route path="/preview" element={<PreviewPage data={formData} />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route
            path="/final"
            element={
              <FinalSubmitPage data={formData} onSubmit={handleFinalSubmit} />
            }
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route
            path="/dashboard"
            element={
              <DashboardPage appNumber={appNumber} name={submittedData?.name} />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}
