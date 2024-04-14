import React, { useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Experience.css";
import { ExperienceProvider, useExperience } from "./ExperienceContext";

const Experience = () => {
  const { experience, setExperience } = useExperience();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };
  const handleDateChange = (dateType, date) => {
    setExperience((prev) => ({ ...prev, [dateType]: date }));
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <input ref={ref} value={value} onClick={onClick} readOnly />
      <button id="calendar-icon" onClick={onClick}>
        <FontAwesomeIcon icon={faCalendar} />
      </button>
    </div>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experience, "Experience");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section id="experience">
          <div id="companyName-container">
            <label htmlFor="companyName">Company Name: </label>
            <input
              name="companyName"
              placeholder="Company Name"
              value={experience.companyName}
              onChange={handleChange}
            />
          </div>
          <div id="position-container">
            <label htmlFor="position">Position: </label>
            <input
              name="positionTitle"
              placeholder="Position"
              value={experience.positionTitle}
              onChange={handleChange}
            />
          </div>
          <div id="role-container">
            <label htmlFor="role">Role: </label>
            <input
              name="role"
              placeholder="Role"
              value={experience.role}
              onChange={handleChange}
            />
          </div>
          <div className="date-container">
            <div id="joinDate-container">
              <label>Join Date: </label>
              <div className="date-wrapper">
                <DatePicker
                  selected={experience.joinDate}
                  onChange={(date) => handleDateChange("joinDate", date)}
                  customInput={<CustomInput />}
                />
              </div>
            </div>
            <div id="leaveDate-container">
              <label>Leave Date: </label>
              <div className="date-wrapper">
                <DatePicker
                  selected={experience.leaveDate}
                  onChange={(date) => handleDateChange("leaveDate", date)}
                  customInput={<CustomInput />}
                />
              </div>
            </div>
          </div>
        </section>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Experience;
