import React, { useState } from "react";
import "./AddMembers.css"; // Import your CSS file for styling

function getCurrentDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function AddMembers(props) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    Name: "",
    Company: "",
    Status: "",
    Notes: "",
    LastUpdated: "",
  });

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const aajKaDate = getCurrentDate();
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
      LastUpdated: aajKaDate,
    }));
  };

  const handleSave = () => {
    props.onSave(newMember); // Pass the new member data to the parent component
    setPopupOpen(false);
    alert("New member added.");
  };

  return (
    <div>
      <button className="add-members-button" onClick={togglePopup}>
        Add Members +
      </button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Member</h2>
            <label>
              Name:
              <input
                type="text"
                name="Name"
                value={newMember.Name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="Company"
                value={newMember.Company}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Status:
              <input
                type="text"
                name="Status"
                value={newMember.Status}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Notes:
              <input
                type="text"
                name="Notes"
                value={newMember.Notes}
                onChange={handleInputChange}
              />
            </label>
            <div className="popup-buttons">
              <button className="cancel-button" onClick={togglePopup}>
                Cancel
              </button>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMembers;
