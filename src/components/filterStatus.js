import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./filter.css";

function StatusDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const allStatuses = [...new Set(props.data.map((item) => item.Status))];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedStatuses([]);
    } else {
      setSelectedStatuses(allStatuses);
    }
    setSelectAll(!selectAll);
  };

  const handleStatusCheckboxChange = (status) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((item) => item !== status));
      props.handler(
        "Status",
        selectedStatuses.filter((item) => item !== status)
      );
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
      props.handler("Status", [...selectedStatuses, status]);
    }
    setSelectAll(false);
  };

  return (
    <div className="checkbox-dropdown">
      <button className="dropdown-toggle" onClick={handleToggleDropdown}>
        Status <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <div className="company-dropdown">
          <label>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            Select All
          </label>
          <ul>
            {allStatuses.map((status) => (
              <li key={status}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedStatuses.includes(status)}
                    onChange={() => handleStatusCheckboxChange(status)}
                  />
                  {status}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StatusDropdown;
