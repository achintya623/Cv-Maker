import React from "react";
import { FormField } from "./FormField";

export function ExperienceFormItem({
  entry,
  handleExperienceChange,
  handleExperienceDelete,
  onClose,
}) {
  const handleChange = (e) => {
    handleExperienceChange(entry.id, e.target.id, e.target.value);
  };

  return (
    <div className="form-item-content">
      <FormField
        label="Company Name"
        id="company"
        placeholder="Enter Company Name"
        type="text"
        value={entry.company || ""}
        onChange={handleChange}
      />
      <FormField
        label="Position Title"
        id="position"
        placeholder="Enter Position Title"
        type="text"
        value={entry.position || ""}
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
      <FormField
        label="Description"
        id="description"
        placeholder="e.g., Cambridge, MA"
        type="text"
        value={entry.description || ""}
        onChange={handleChange}
      />
      <div className="form-item-actions">
        <button type="button" onClick={onClose} className="done-button">
          Done Editing
        </button>

        <button
          type="button"
          onClick={() => handleExperienceDelete(entry.id)}
          className="delete-button"
        >
          Delete Entry
        </button>
      </div>
    </div>
  );
}
