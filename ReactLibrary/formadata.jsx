import React, { useState } from 'react';

const GeneralInfoForm = ({ data, onSubmit, onEdit }) => {
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
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>{formData.name}</h2>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default GeneralInfoForm;
