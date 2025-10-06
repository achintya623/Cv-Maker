import React from "react";

export function PreviewMainDiv({ cvData }) {
  const { personalDetails, educationDetails, experienceDetails } = cvData;
  return (
    <div className="preview-main-div">
      <div className="preview-header">
        <div className="header-name">
          <h1>{personalDetails.fullName || "Your Full Name"}</h1>
        </div>
        <div className="header-info">
          <div>
            <svg
              fill="#000000"
              width="16px"
              height="16px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                fillRule="evenodd"
              />
            </svg>
            <span>{personalDetails.email || "Your Email"}</span>
          </div>
          <div>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" />
            </svg>
            <span>{personalDetails.phoNum || "Your Phone Number"}</span>
          </div>
          <div>
            <svg
              className="location-svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 2C8.686 2 6 4.686 6 8c0 5 6 13 6 13s6-8 6-13c0-3.314-2.686-6-6-6zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            <span>{personalDetails.address || "Your Address"}</span>
          </div>
        </div>
      </div>
      <div>
        {cvData.educationDetails.length > 0 && (
          <div className="preview-body-block">
            <div>
              <h2>Education</h2>
            </div>
            {cvData.educationDetails.map((entry) => {
              return (
                <div className="preview-education-item" key={entry.id}>
                  <div className="preview-education-item-left">
                    <div>
                      {entry.startDate} - {entry.endDate}
                    </div>
                    <div>{entry.location}</div>
                  </div>
                  <div className="preview-education-item-right">
                    <div>{entry.school}</div>
                    <div>{entry.degree}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {cvData.experienceDetails.length > 0 && (
          <div className="preview-body-block">
            <div>
              <h2>Experience</h2>
            </div>
            {cvData.experienceDetails.map((entry) => {
              return (
                <div className="preview-experience-item" key={entry.id}>
                  <div className="preview-experience-item-left">
                    <div>
                      {entry.startDate} - {entry.endDate}
                    </div>
                    <div>{entry.location}</div>
                  </div>
                  <div className="preview-experience-item-right">
                    <div>{entry.company}</div>
                    <div>{entry.position}</div>
                    <div>{entry.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
