import React, { useState, useMemo } from "react";

const employees = [
  { id: 1, name: "Alice", department: "Engineering", role: "Frontend", location: "NY" },
  { id: 2, name: "Bob", department: "Engineering", role: "Backend", location: "SF" },
  { id: 3, name: "Charlie", department: "HR", role: "Recruiter", location: "NY" },
  { id: 4, name: "David", department: "HR", role: "Payroll", location: "LA" },
  { id: 5, name: "Eva", department: "Sales", role: "Manager", location: "SF" },
];

function FilterableTable() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // 🔹 Filtered roles depend on department
  const roleOptions = useMemo(() => {
    if (!selectedDept) return [];
    return [...new Set(employees
      .filter(emp => emp.department === selectedDept)
      .map(emp => emp.role))];
  }, [selectedDept]);

  // 🔹 Filtered locations depend on role
  const locationOptions = useMemo(() => {
    if (!selectedRole) return [];
    return [...new Set(employees
      .filter(emp => emp.role === selectedRole)
      .map(emp => emp.location))];
  }, [selectedRole]);

  // 🔹 Final filtered employees
  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      return (
        (!selectedDept || emp.department === selectedDept) &&
        (!selectedRole || emp.role === selectedRole) &&
        (!selectedLocation || emp.location === selectedLocation) &&
        emp.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, selectedDept, selectedRole, selectedLocation]);

  return (
    <div>
      <h2>Employee Directory</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Department Filter */}
      <select value={selectedDept} onChange={(e) => {
        setSelectedDept(e.target.value);
        setSelectedRole(""); // reset dependent filters
        setSelectedLocation("");
      }}>
        <option value="">All Departments</option>
        {[...new Set(employees.map(emp => emp.department))].map(dept => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      {/* Role Filter */}
      <select value={selectedRole} onChange={(e) => {
        setSelectedRole(e.target.value);
        setSelectedLocation("");
      }}>
        <option value="">All Roles</option>
        {roleOptions.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      {/* Location Filter */}
      <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="">All Locations</option>
        {locationOptions.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      {/* Table */}
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
              <td>{emp.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterableTable;
