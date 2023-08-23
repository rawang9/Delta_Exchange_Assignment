import "./App.css";
import CheckboxDropdown from "./components/filter";
import StatusDropdown from "./components/filterStatus";
import { useState } from "react";
import AddMembers from "./components/addMember";
import MemberTable from "./components/members";
const data = [
  {
    Name: "John Doe",
    Company: "ABC Inc",
    Status: "Active",
    LastUpdated: "2023-08-20",
    Notes: "Lorem ipsum dolor sit amet.",
  },
  {
    Name: "Jane Smith",
    Company: "XYZ Corp",
    Status: "Inactive",
    LastUpdated: "2023-08-19",
    Notes: "Consectetur adipiscing elit.",
  },
  {
    Name: "Michael Johnson",
    Company: "ABC Inc",
    Status: "Active",
    LastUpdated: "2023-08-21",
    Notes: "Praesent eget semper erat.",
  },
];
function App() {
  const [members, setMembers] = useState(data);
  const [renderData, setRenderData] = useState(members);
  const handleSaveMember = (newMember) => {
    setRenderData([...members, newMember]);
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };
  const handleSelectCheckbox = (index) => {
    console.log(`Selected Item : ${index}`);
  };
  const handleDeleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
    setRenderData(updatedMembers);
  };

  const handleFilter = (filterType, mustHave) => {
    if (filterType === "Company" && mustHave.length > 0) {
      setRenderData(members.filter((item) => mustHave.includes(item.Company)));
    } else if (filterType === "Status" && mustHave.length > 0) {
      setRenderData(members.filter((item) => mustHave.includes(item.Status)));
    } else {
      setRenderData(members);
    }
    console.log("App.js", filterType, mustHave, renderData);
  };
  return (
    <div className="container">
      <div className="header">
        <h1>Team Mambers</h1>
        <AddMembers onSave={handleSaveMember} />
      </div>
      <hr />
      <CheckboxDropdown data={members} handler={handleFilter} />
      <StatusDropdown data={members} handler={handleFilter} />
      <MemberTable
        members={renderData}
        onSelectCheckbox={handleSelectCheckbox}
        onDeleteMember={handleDeleteMember}
      />
    </div>
  );
}

export default App;
