import React from "react";
import { FormField } from "./FormField";

export function EducationFormItem({
  entry,
  handleEducationChange,
  handleEducationDelete,
  onClose,
}) {
  const handleChange = (e) => {
    handleEducationChange(entry.id, e.target.id, e.target.value);
  };

  return (
    <div className="form-item-content">
      <FormField
        label="School/University"
        id="school"
        placeholder="e.g., MIT"
        type="text"
        value={entry.school || ""}
        onChange={handleChange}
      />
      <FormField
        label="Degree/Field of Study"
        id="degree"
        placeholder="e.g., Master of Science"
        type="text"
        value={entry.degree || ""}
        onChange={handleChange}
      />
      <span>
        <FormField
          label="Start Date"
          id="startDate"
          placeholder="e.g., Aug 2020"
          type="text"
          value={entry.startDate || ""}
          onChange={handleChange}
        />
        <FormField
          label="End Date"
          id="endDate"
          placeholder="e.g., May 2024"
          type="text"
          value={entry.endDate || ""}
          onChange={handleChange}
        />
      </span>
      <FormField
        label="Location"
        id="location"
        placeholder="e.g., Cambridge, MA"
        type="text"
        value={entry.location || ""}
        onChange={handleChange}
      />
      <div className="form-item-actions">
        <button type="button" onClick={onClose} className="done-button">
          Done Editing
        </button>

        <button
          type="button"
          onClick={() => handleEducationDelete(entry.id)}
          className="delete-button"
        >
          Delete Entry
        </button>
      </div>
    </div>
  );
}
