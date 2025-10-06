import React from "react";
import { FormField } from "./FormField";

export function PersonalFormBlock({ personalData, setCvData }) {
  const handleChange = (e) => {
    const fieldName = e.target.id;
    const value = e.target.value;

    setCvData((prevCvData) => ({
      ...prevCvData,
      personalDetails: { ...prevCvData.personalDetails, [fieldName]: value },
    }));
  };

  return (
    <div className="form-block">
      <div className="form-block-header">
        <h2>Personal Details</h2>
      </div>
      <FormField
        label="Full Name"
        id="fullName"
        placeholder="First and last name"
        type="text"
        value={personalData.fullName || ""}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        id="email"
        placeholder="Enter email"
        type="email"
        value={personalData.email || ""}
        onChange={handleChange}
      />
      <FormField
        label="Phone number"
        id="phoNum"
        placeholder="Enter phone number"
        type="text"
        value={personalData.phoNum || ""}
        onChange={handleChange}
      />
      <FormField
        label="Address"
        id="address"
        placeholder="City, Country"
        type="text"
        value={personalData.address || ""}
        onChange={handleChange}
      />
    </div>
  );
}
