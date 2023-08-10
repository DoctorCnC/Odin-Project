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


// import { useState } from "react";

// export default function App() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState("");

//   const sendMessage = (message) => {
//     // Here you can implement your message sending logic
//     // For example, you could make an API request to send the message to a server
//     console.log("Message sent:", message);
//   };

//   if (isSent) {
//     return <h2>Your message is on its way!</h2>;
//   }

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         setIsSent(true);
//         sendMessage(message);
//       }}
//     >
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


export default PracticalExperienceForm;
