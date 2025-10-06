import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EducationFormItem } from "./EducationFormItem";

export default function EducationFormBlock({ cvData, setCvData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const educationDetails = cvData.educationDetails;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: uuidv4(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };

    setCvData((prevCvData) => ({
      ...prevCvData,
      educationDetails: [...prevCvData.educationDetails, newEducation],
    }));
    setIsExpanded(true);
    setEditingId(newEducation.id);
  };

  const handleEducationChange = (id, fieldName, value) => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      educationDetails: prevCvData.educationDetails.map((item) =>
        item.id === id ? { ...item, [fieldName]: value } : item
      ),
    }));
  };

  const handleEducationDelete = (id) => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      educationDetails: prevCvData.educationDetails.filter(
        (item) => item.id !== id
      ),
    }));
    setEditingId(null);
  };

  const closeEdit = () => setEditingId(null);

  return (
    <div className="form-block">
      <div onClick={toggleExpand} className="form-block-header">
        <h2>Education {isExpanded ? "▼" : "▶"}</h2>
      </div>

      {isExpanded && (
        <div className="form-block-content">
          {educationDetails.length === 0 && (
            <p>You currently have no education entries</p>
          )}

          {educationDetails.map((entry) => {
            return (
              <div
                key={entry.id}
                onClick={() => setEditingId(entry.id)}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "5px",
                  cursor: "pointer",
                }}
                className="education-entry-title"
              >
                {entry.school}
                {editingId === entry.id && (
                  <div onClick={(e) => e.stopPropagation()}>
                    <EducationFormItem
                      entry={entry}
                      handleEducationChange={handleEducationChange}
                      handleEducationDelete={handleEducationDelete}
                      onClose={closeEdit}
                    />
                  </div>
                )}
              </div>
            );
          })}
          <button type="button" onClick={handleAddEducation}>
            ➕ Add Education
          </button>
        </div>
      )}
    </div>
  );
}
