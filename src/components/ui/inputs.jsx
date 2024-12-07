import React, { useState } from "react";

function Inputs() {
  const [inputvalue, setInputvalue] = useState("");
  const [textareavalue, setTextareavalue] = useState("");

  const handleInput = (event) => {
    setInputvalue(event.target.value);
  };
  const handleTextArea = (event) => {
    setTextareavalue(event.target.value);
  };
  return (
    <div className="d-flex flex-column border rounded-3 h-100 p-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={inputvalue}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={textareavalue}
          onChange={handleTextArea}
        ></textarea>
      </div>
    </div>
  );
}

export default Inputs;
