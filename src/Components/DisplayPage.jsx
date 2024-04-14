import "./DisplayPage.css";
import React, { useContext, useRef } from "react";
import { UserContext } from "./UserContext";
import { EducationContext } from "./EducationContext";
import { ExperienceContext } from "./ExperienceContext";
import { useEffect } from "react";
import html2canvas from "html2canvas";

const DisplayPage = () => {
  const { userInfo } = useContext(UserContext);
  const { education } = useContext(EducationContext);
  const { experience } = useContext(ExperienceContext);

  // const { userInfo } = useUser();
  // const { education } = useEducation();
  // const { experience } = useExperience();

  useEffect(() => {
    console.log("inside useEffect");
    console.log(userInfo);
    console.log(education);
    console.log(experience);
  }, [userInfo, education, experience]);

  const handleDownloadScreenshot = () => {
    console.log("Capturing screenshot...");
    // Check if displayRef.current is valid

    html2canvas(document.getElementById("container")).then((canvas) => {
      // Convert canvas to image
      const imgData = canvas.toDataURL("image/png");

      // Trigger download
      const a = document.createElement("a");
      a.href = imgData;
      a.download = "screenshot.png";
      a.click();
    });
  };

  return (
    <div id="container" className="card-deck container-fluid">
      <section id="info-container" className="card">
        <div id="info-subContainer" className="ribbon">
          <label>User Profile: </label>
        </div>

        {userInfo && (
          <div id="user-information-container" className="display">
            <div class="mb-3 row">
              <label className="col-md-4 control-label label">Name: </label>
              <span className="form-control">{userInfo.name}</span>
            </div>

            <div class="mb-3 row">
              <label className="col-md-4 control-label label">Phone:</label>
              <span className="form-control"> {userInfo.phoneNumber}</span>
            </div>

            <div class="mb-3 row">
              <label className="col-md-4 control-label label">Email: </label>
              <span className="form-control">{userInfo.email}</span>
            </div>
          </div>
        )}
      </section>

      <section id="education-container" className="card">
        <div id="education-subContainer" className="ribbon">
          <label>Education: </label>
        </div>
        {education && (
          <div id="education-information-container" className="display">
            <div className="mb-3 row">
              <label className="col-md-4 control-label label">
                InstituteName:{" "}
              </label>
              <span className="form-control">{education.instituteName}</span>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 control-label label">
                FieldOfStudy:{" "}
              </label>
              <span className="form-control">{education.fieldOfStudy}</span>
            </div>

            <div className="mb-3 row">
              {" "}
              <label className="col-md-4 control-label label">
                StartDate:{" "}
              </label>
              <span className="form-control">
                {education.startDate.toLocaleDateString("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 control-label label">EndDate: </label>
              <span className="form-control">
                {education.endDate.toLocaleDateString("en-US", {
                  // Corrected the typo here
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>
          </div>
        )}
      </section>
      <section id="experience-container" className="card">
        <div id="experience-subContainer" className="ribbon">
          <label>Experience: </label>
        </div>
        {experience && (
          <div id="experience-information-container" className="display">
            <div className="mb-3 row">
              <label className="col-md-4 control-label label">
                CompanyName:{" "}
              </label>
              <span className="form-control">{experience.companyName}</span>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 control-label label">
                PositionTitle:{" "}
              </label>
              <span className="form-control">{experience.positionTitle}</span>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 control-label label">Role: </label>
              <span className="form-control">{experience.role}</span>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 control-label label">JoinDate: </label>
              <span className="form-control">
                {experience.joinDate.toLocaleDateString("en-US", {
                  // Corrected the typo here
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 control-label label">
                LeaveDate:{" "}
              </label>
              <span className="form-control">
                {experience.leaveDate.toLocaleDateString("en-US", {
                  // Corrected the typo here
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>
          </div>
        )}
      </section>
      <div id="button-container">
        <button className="btn btn-success" onClick={handleDownloadScreenshot}>
          Download
        </button>
      </div>
    </div>
  );
};

export default DisplayPage;
