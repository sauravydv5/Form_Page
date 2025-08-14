import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Steps from "./components/common/Steps";
import LoginPage from "./components/Page/LoginPage";
import FormPage from "./components/Page/FormPage";
import PreviewPage from "./components/Page/PreviewPage";
import FinalSubmitPage from "./components/Page/FinalSubmitPage";
import ConfirmationPage from "./components/Page/ConfirmationPage";
import DashboardPage from "./Dashboard/DashboardPage";
import { generateAppNumber } from "./components/utils/generateAppNumber";

export default function App() {
  const [auth, setAuth] = useState(null);
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [appNumber, setAppNumber] = useState("");

  // Generate unique application number and save form data
  const handleFinalSubmit = () => {
    const unique = generateAppNumber();
    setAppNumber(unique);
    setSubmittedData(formData);
    return unique; // important: return number for FinalSubmitPage
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {auth && window.location.pathname !== "/confirmation" && <Steps />}

        <Routes>
          <Route path="/" element={<LoginPage onDone={setAuth} />} />
          <Route path="/form" element={<FormPage onSave={setFormData} />} />
          <Route path="/preview" element={<PreviewPage data={formData} />} />
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
      </div>
    </Router>
  );
}
