import { useState } from "react";
import "./App.css";
import { FormMainDiv } from "./components/FormMainDiv";
import { PreviewMainDiv } from "./components/PreviewMainDiv";

function App() {
  const [cvData, setCvData] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      phoNum: "",
      address: "",
    },
    educationDetails: [],
    experienceDetails: [],
  });

  return (
    <div className="container">
      <FormMainDiv cvData={cvData} setCvData={setCvData} />
      <PreviewMainDiv cvData={cvData} />
    </div>
  );
}

export default App;
