import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import UserInfo from "./UserInfo";
import Education from "./Education";
import Experience from "./Experience";
import { UserProvider, useUser } from "./UserContext";
import { EducationProvider, useEducation } from "./EducationContext";
import { ExperienceProvider, useExperience } from "./ExperienceContext";
import { UserContext } from "./UserContext";
import { EducationContext } from "./EducationContext";
import { ExperienceContext } from "./ExperienceContext";
import "./DefaultPage.css";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  // const { userInfo } = useUser();
  // const { education } = useEducation();
  // const { experience } = useExperience();
  const { userInfo } = useContext(UserContext);
  const { education } = useContext(EducationContext);
  const { experience } = useContext(ExperienceContext);

  const [editUserInfo, setEditUserInfo] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  const handleInfo = () => {
    setEditUserInfo(!editUserInfo);
  };
  const handleEducation = () => {
    setEditEducation(true);
  };
  const handleExperience = () => {
    setEditExperience(true);
  };

  return (
    <div>
      <div id="container" className="card-deck container-fluid">
        <section id="info-container" className="card">
          <div id="info-subContainer">
            <label>User Profile: </label>
          </div>
          <button className="btn btn-primary" id="edit" onClick={handleInfo}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <div>{userInfo.name}</div>
          {editUserInfo && <UserInfo />}
        </section>
        <section id="education-container" className="card">
          <div id="education-subContainer">
            <label>Education: </label>
          </div>
          <button
            className="btn btn-primary"
            id="edit"
            onClick={handleEducation}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          {editEducation && <Education />}
        </section>
        <section id="experience-container" className="card">
          <div id="experience-subContainer">
            <label>Experience: </label>
          </div>
          <button
            className="btn btn-primary"
            id="edit"
            onClick={handleExperience}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          {editExperience && <Experience />}
          {console.log(experience, "Experience in default page")}
        </section>
        <Link type="button" className="btn btn-success" to="/result">
          Save
        </Link>
      </div>
    </div>
  );
};

export default DefaultPage;
