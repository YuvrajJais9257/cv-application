import React, { createContext, useContext, useState } from "react";

export const EducationContext = createContext();

export const useEducation = () => useContext(EducationContext);

export const EducationProvider = ({ children }) => {
  const [education, setEducation] = useState({
    instituteName: "",
    fieldOfStudy: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <EducationContext.Provider value={{ education, setEducation }}>
      {children}
    </EducationContext.Provider>
  );
};
