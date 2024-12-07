import React, { useState } from "react";

function Dropdowns() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("Choose");

  // Array of dropdown options
  const options = ["Action", "Another action", "Something else here"];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelect = (value) => {
    setSelectedValue2(value);
  };
  return (
    <div className="p-4 border rounded-3 h-100">
      <label htmlFor="names" className="my-2 fs-5">
        Select - Options
      </label>
      <div>
        <select
          id="inputState"
          className="form-select"
          value={selectedValue}
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <label htmlFor="names" className="mt-4 fs-5">
        Dropdown Menu
      </label>
      <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedValue2}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Dropdowns;
