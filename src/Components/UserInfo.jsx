import React, { useState } from "react";
import "./UserInfo.css";
import { UserProvider, useUser } from "./UserContext";

const UserInfo = () => {
  const { userInfo, setUserInfo } = useUser();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userInfo, "in userinfo component");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo, "userInfo");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section id="user-info">
          <div id="name-container">
            <label>Name:</label>
            <input
              name="name"
              placeholder="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div id="email-container">
            <label>Email:</label>
            <input
              name="email"
              placeholder="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div id="phoneNumber-container">
            <label>Phone Number:</label>
            <input
              name="phoneNumber"
              placeholder="phone number"
              value={userInfo.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </section>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
