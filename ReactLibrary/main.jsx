// CVForm.js

import React, { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import EducationalExperienceForm from './EducationalExperienceForm';
import PracticalExperienceForm from './PracticalExperienceForm';

const CVForm = () => {
  // State for general information
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // State for educational experience
  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  // State for practical experience
  const [practicalExperience, setPracticalExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateTo: '',
  });

  // Submit handlers for each section
  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationalExperienceSubmit = (data) => {
    setEducationalExperience(data);
  };

  const handlePracticalExperienceSubmit = (data) => {
    setPracticalExperience(data);
  };

  // Edit handlers for each section
  const handleGeneralInfoEdit = () => {
    // Implement edit logic for general information form
  };

  const handleEducationalExperienceEdit = () => {
    // Implement edit logic for educational experience form
  };

  const handlePracticalExperienceEdit = () => {
    // Implement edit logic for practical experience form
  };

  return (
    <div>
      <h1>CV Form</h1>
      <GeneralInfoForm
        data={generalInfo}
        onSubmit={handleGeneralInfoSubmit}
        onEdit={handleGeneralInfoEdit}
      />
      <EducationalExperienceForm
        data={educationalExperience}
        onSubmit={handleEducationalExperienceSubmit}
        onEdit={handleEducationalExperienceEdit}
      />
      <PracticalExperienceForm
        data={practicalExperience}
        onSubmit={handlePracticalExperienceSubmit}
        onEdit={handlePracticalExperienceEdit}
      />
    </div>
  );
};

export default CVForm;
