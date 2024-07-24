import React from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: "false",
    salaryRange: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 60) {
      setErrorMessage("The Age is not Allowed");
    } else if (phoneNumber.length < 11 || phoneNumber.length > 12) {
      setErrorMessage("Phone number is incorrect");
    }
    setShowModel(true);
  }

  const btnDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  function handleDivClick() {
    if (showModel) {
      setShowModel(false);
    }
  }

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <from className="flex" style={{ flexDirection: "column" }} id="loan-form">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name</label>
        <input
          value={loanInputs.name}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, name: e.target.value });
          }}
        />

        <label> Phone Number</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, phoneNumber: e.target.value });
          }}
        />

        <label>Age</label>
        <input
          value={loanInputs.age}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, age: e.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee === "true"}
          onChange={(e) => {
            setLoanInputs({
              ...loanInputs,
              isEmployee: e.target.checked ? "true" : "false",
            });
          }}
        />

        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, salaryRange: e.target.value });
          }}
        >
          <option>Less Than 500$</option>
          <option>More Than 500$</option>
          <option>more Than 1000$</option>
        </select>

        <button
          className={btnDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnDisabled}
          id="submitBtn"
        >
          Submit
        </button>
      </from>
      <Modal errorMessage={errorMessage} isVisible={showModel} />
    </div>
  );
}

export default LoanForm;
