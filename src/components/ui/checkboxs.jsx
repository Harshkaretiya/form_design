import React, { useState } from 'react'

function Checkboxs() {
    const [checkbox, setCheckbox] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
      });
      const handleCheckBox = (event) => {
        const { name, checked } = event.target;
        setCheckbox((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
      };
  return (
    <div className="d-flex flex-column border rounded-3 h-100 p-4">
      <label htmlFor="names" className="my-2 fs-5">
          Select Checkbox
        </label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox1"
            checked={checkbox.checkbox1}
            onChange={handleCheckBox}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            checkbox1
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox2"
            checked={checkbox.checkbox2}
            onChange={handleCheckBox}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            checkbox2
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox3"
            checked={checkbox.checkbox3}
            onChange={handleCheckBox}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            checkbox3
          </label>
        </div>
    </div>
  )
}

export default Checkboxs
