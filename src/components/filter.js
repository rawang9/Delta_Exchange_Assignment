import React, { useState } from "react";
import "./filter.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function CheckboxDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const allCompanies = [...new Set(props.data.map((item) => item.Company))];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCompanies([]);
    } else {
      setSelectedCompanies(allCompanies);
      props.handler("Default", selectedCompanies);
    }
    setSelectAll(!selectAll);
  };

  const handleCompanyCheckboxChange = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(
        selectedCompanies.filter((item) => item !== company)
      );
      props.handler(
        "Company",
        selectedCompanies.filter((item) => item !== company)
      );
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
      props.handler("Company", [...selectedCompanies, company]);
    }
    setSelectAll(false);
  };

  return (
    <div className="checkbox-dropdown">
      <button className="dropdown-toggle" onClick={handleToggleDropdown}>
        Company ({allCompanies.length}) <FontAwesomeIcon icon={faCaretDown} />
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
            {allCompanies.map((company) => (
              <li key={company}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => handleCompanyCheckboxChange(company)}
                  />
                  {company}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CheckboxDropdown;
