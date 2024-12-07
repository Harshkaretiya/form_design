import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Radiobuttons from "./components/ui/radiobuttons";
import Inputs from "./components/ui/inputs";
import Checkboxs from "./components/ui/checkboxs";
import Dropdowns from "./components/ui/Dropdowns";
import UploadFile from "./components/ui/UploadFile";

function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [textareavalue, setTextareavalue] = useState("");

  const [checkbox, setCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [radiobutton, setRadiobutton] = useState("flexRadioDefault1");

  const handleInput = (event) => {
    setInputvalue(event.target.value);
  };
  const handleTextArea = (event) => {
    setTextareavalue(event.target.value);
  };

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setCheckbox((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const handleRadioButton = (event) => {
    setRadiobutton(event.target.id);
  };

  return (
    // <div className=" d-flex vh-100 justify-content-center align-items-center">
    //   <form className="d-flex flex-column">
    //    {/* ------------------------------------------- */}
    //     <div class="mb-3">
    //       <label htmlFor="exampleFormControlInput1" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="exampleFormControlInput1"
    //         placeholder="name@example.com"
    //         value={inputvalue}
    //         onChange={handleInput}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label htmlFor="exampleFormControlTextarea1" className="form-label">
    //         Example textarea
    //       </label>
    //       <textarea
    //         className="form-control"
    //         id="exampleFormControlTextarea1"
    //         rows="3"
    //         value={textareavalue}
    //         onChange={handleTextArea}
    //       ></textarea>
    //     </div>

    //    {/* ------------------------------------------- */}

    //     <label htmlFor="names" className="my-2 fs-5">
    //       {" "}
    //       Select Checkbox{" "}
    //     </label>

    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         name="checkbox1"
    //         checked={checkbox.checkbox1}
    //         onChange={handleCheckBox}
    //         id="flexCheckDefault"
    //       />
    //       <label className="form-check-label" htmlFor="flexCheckDefault">
    //         checkbox1
    //       </label>
    //     </div>

    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         name="checkbox2"
    //         checked={checkbox.checkbox2}
    //         onChange={handleCheckBox}
    //         id="flexCheckDefault"
    //       />
    //       <label className="form-check-label" htmlFor="flexCheckDefault">
    //         checkbox2
    //       </label>
    //     </div>

    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         name="checkbox3"
    //         checked={checkbox.checkbox3}
    //         onChange={handleCheckBox}
    //         id="flexCheckDefault"
    //       />
    //       <label className="form-check-label" htmlFor="flexCheckDefault">
    //         checkbox3
    //       </label>
    //     </div>
    //     {/* ------------------------------------------- */}
    //     <div class="form-check">
    //       <input
    //         class="form-check-input"
    //         type="radio"
    //         name="flexRadioDefault"
    //         id="flexRadioDefault1"
    //         onChange={handleRadioButton}
    //         checked={radiobutton === "flexRadioDefault1"}
    //       />
    //       <label class="form-check-label" for="flexRadioDefault1">
    //         radio 1
    //       </label>
    //     </div>
    //     <div class="form-check">
    //       <input
    //         class="form-check-input"
    //         type="radio"
    //         name="flexRadioDefault"
    //         id="flexRadioDefault2"
    //         onChange={handleRadioButton}
    //         checked={radiobutton === "flexRadioDefault2"}
    //       />
    //       <label class="form-check-label" for="flexRadioDefault2">
    //         radio 2
    //       </label>
    //     </div>
    //   </form>
    // </div>
    <div className="d-grid gap-5 m-5">
      <div className="row">
        <div className="col">
          <Inputs />
        </div>
        <div className="col">
          <Checkboxs />
        </div>
        <div className="col">
          <Radiobuttons />
        </div>
        <div className="col">
          <Dropdowns/>
        </div>
      </div>
      <div className="row">
      <div className="col-4">
          <UploadFile/>
        </div>
      </div>
    </div>
  );
}

export default App;
