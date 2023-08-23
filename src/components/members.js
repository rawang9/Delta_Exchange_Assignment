import React from "react";
import "./MemberTable.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function MemberTable({ members, onSelectCheckbox, onDeleteMember }) {
  return (
    <table className="member-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index} className={index % 2 === 1 ? "even-row" : "odd-row"}>
            <td>
              <input
                type="checkbox"
                checked={member.selected}
                onChange={() => onSelectCheckbox(index)}
              />
            </td>
            <td>{member.Name}</td>
            <td>{member.Company}</td>
            <td>{member.Status}</td>
            <td>{member.LastUpdated}</td>
            <td>{member.Notes}</td>
            <td>
              <span
                className="delete-icon"
                onClick={() => onDeleteMember(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MemberTable;
