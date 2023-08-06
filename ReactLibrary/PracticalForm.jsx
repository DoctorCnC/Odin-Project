import React, { useState } from 'react';

const PracticalExperienceForm = ({ data, onSubmit, onEdit }) => {
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
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="positionTitle"
            value={formData.positionTitle}
            onChange={handleChange}
          />
          <textarea
            name="mainResponsibilities"
            value={formData.mainResponsibilities}
            onChange={handleChange}
          />
          <input
            type="text"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="dateTo"
            value={formData.dateTo}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>{formData.companyName}</h2>
          <p>Position: {formData.positionTitle}</p>
          <p>Main Responsibilities: {formData.mainResponsibilities}</p>
          <p>Date From: {formData.dateFrom}</p>
          <p>Date To: {formData.dateTo}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PracticalExperienceForm;
