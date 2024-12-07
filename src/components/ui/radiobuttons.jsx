import React, { useState } from 'react'

function Radiobuttons() {

    const [radiobutton, setRadiobutton] = useState("flexRadioDefault1");

    const handleRadioButton = (event) => {
        setRadiobutton(event.target.id);
      };

  return (
    <div className="d-flex flex-column border rounded-3 h-100 p-4">
        <label htmlFor="names" className="my-2 fs-5">
          Select RadioButton
        </label>
      <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={handleRadioButton}
            checked={radiobutton === "flexRadioDefault1"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            radio 1
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={handleRadioButton}
            checked={radiobutton === "flexRadioDefault2"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            radio 2
          </label>
        </div>
    </div>
  )
}

export default Radiobuttons
