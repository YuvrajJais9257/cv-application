import React, { useState, forwardRef } from "react";
import { useEducation, EducationProvider } from "./EducationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Education.css";

const Education = () => {
  const { education, setEducation } = useEducation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (dateType, date) => {
    setEducation((prev) => ({ ...prev, [dateType]: date }));
  };
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div id="date-input">
      <input ref={ref} value={value} onClick={onClick} readOnly />
      <button id="calendar-icon" onClick={onClick}>
        <FontAwesomeIcon icon={faCalendar} />
      </button>
    </div>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(education, "Education");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section id="education-info">
          <div id="instituteName-container">
            <label>Institute Name: </label>
            <input
              name="instituteName"
              placeholder="institute name"
              value={education.instituteName}
              onChange={handleChange}
            />
          </div>
          <div id="study-container">
            <label>Field Of Study: </label>
            <input
              name="fieldOfStudy"
              placeholder="field of study"
              value={education.fieldOfStudy}
              onChange={handleChange}
            />
          </div>
          <div className="date-container">
            <div id="startDate-container">
              <label>Start Date: </label>
              <div className="date-wrapper">
                <DatePicker
                  className="date-input"
                  selected={education.startDate}
                  onChange={(date) => handleDateChange("startDate", date)}
                  customInput={<CustomInput />}
                />
              </div>
            </div>
            <div id="endDate-container">
              <label>End Date: </label>
              <div className="date-wrapper">
                <DatePicker
                  className="date-input"
                  selected={education.endDate}
                  onChange={(date) => handleDateChange("endDate", date)}
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

export default Education;
