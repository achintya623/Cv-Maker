import React from "react";
import { PersonalFormBlock } from "./personalFormBlock";
import EducationFormBlock from "./EducationFormBlock";
import ExperienceFormBlock from "./ExperienceFormBlock";

export function FormMainDiv({ cvData, setCvData }) {
  return (
    <div className="form-main-div">
      <PersonalFormBlock
        personalData={cvData.personalDetails}
        setCvData={setCvData}
      />
      <EducationFormBlock cvData={cvData} setCvData={setCvData} />
      <ExperienceFormBlock cvData={cvData} setCvData={setCvData} />
    </div>
  );
}
