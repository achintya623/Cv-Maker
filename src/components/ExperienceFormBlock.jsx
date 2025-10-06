import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ExperienceFormItem } from "./ExperienceFormItem";

export default function ExperienceFormBlock({ cvData, setCvData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const experienceDetails = cvData.experienceDetails;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };

    setCvData((prevCvData) => ({
      ...prevCvData,
      experienceDetails: [...prevCvData.experienceDetails, newExperience],
    }));
    setIsExpanded(true);
    setEditingId(newExperience.id);
  };

  const handleExperienceChange = (id, fieldName, value) => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      experienceDetails: prevCvData.experienceDetails.map((item) =>
        item.id === id ? { ...item, [fieldName]: value } : item
      ),
    }));
  };

  const handleExperienceDelete = (id) => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      experienceDetails: prevCvData.experienceDetails.filter(
        (item) => item.id !== id
      ),
    }));
    setEditingId(null);
  };

  const closeEdit = () => setEditingId(null);

  return (
    <div className="form-block">
      <div onClick={toggleExpand} className="form-block-header">
        <h2>Experience {isExpanded ? "▼" : "▶"}</h2>
      </div>

      {isExpanded && (
        <div className="form-block-content">
          {experienceDetails.length === 0 && (
            <p>You currently have no experience entries</p>
          )}

          {experienceDetails.map((entry) => {
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
                className="experience-entry-title"
              >
                {entry.school}
                {editingId === entry.id && (
                  <div onClick={(e) => e.stopPropagation()}>
                    <ExperienceFormItem
                      entry={entry}
                      handleExperienceChange={handleExperienceChange}
                      handleExperienceDelete={handleExperienceDelete}
                      onClose={closeEdit}
                    />
                  </div>
                )}
              </div>
            );
          })}
          <button type="button" onClick={handleAddExperience}>
            ➕ Add Experience
          </button>
        </div>
      )}
    </div>
  );
}
