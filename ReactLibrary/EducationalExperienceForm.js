import React, { useState } from 'react';

const EducationalExperienceForm = ({ data, onSubmit, onEdit }) => {
  const [formData, setFormData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit(formData);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="titleOfStudy"
            value={formData.titleOfStudy}
            onChange={handleChange}
          />
          <input
            type="text"
            name="dateOfStudy"
            value={formData.dateOfStudy}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>{formData.schoolName}</h2>
          <p>Title of Study: {formData.titleOfStudy}</p>
          <p>Date of Study: {formData.dateOfStudy}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EducationalExperienceForm;
