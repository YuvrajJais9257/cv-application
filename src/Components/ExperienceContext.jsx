import React, { createContext, useContext, useState } from "react";

export const ExperienceContext = createContext();

export const useExperience = () => useContext(ExperienceContext);

export const ExperienceProvider = ({ children }) => {
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    role: "",
    joinDate: new Date(),
    leaveDate: new Date(),
  });

  return (
    <ExperienceContext.Provider value={{ experience, setExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
};
