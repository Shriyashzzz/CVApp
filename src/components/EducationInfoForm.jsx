import { useEffect, useState } from "react";
import Button from "./shared/Button";
export default function EducationInfoForm({
  educationArray,
  setEducationArray,
  handleChange,
  eduInfo,
  setEducationInfo,
}) {
  const handleMoreSchool = (e) => {
    e.preventDefault();
    setEducationArray([...educationArray, eduInfo]);
    setEducationInfo({
      school: "",
      major: "",
      from: new Date().toISOString().split("T")[0],
      to: new Date().toISOString().split("T")[0],
      key: crypto.randomUUID(),
    });
  };

  return (
    <>
      <form className="educationItem" key={eduInfo.key}>
        <div className="inputBox">
          <input
            minLength={2}
            required={true}
            value={eduInfo.school}
            id={`${eduInfo.key}-school`}
            type="text"
            className="inputSchool"
            onChange={(e) => handleChange("school", e.target.value)}
          />
          <label htmlFor={`${eduInfo.key}-school`}>School: </label>
        </div>
        <div className="inputBox">
          <input
            minLength={2}
            required={true}
            value={eduInfo.major}
            id={`${eduInfo.key}-major`}
            type="text"
            className="inputMajor"
            onChange={(e) => handleChange("major", e.target.value)}
          />
          <label htmlFor={`${eduInfo.key}-major`}>Major: </label>
        </div>
        <div className="graduationInfo inputBox">
          <input
            value={eduInfo.from}
            id={`${eduInfo.key}-from`}
            type="date"
            className="inputFromDate"
            onChange={(e) => {
              handleChange("from", e.target.value);
            }}
          />
          <label htmlFor={`${eduInfo.key}-from`}>From: </label>
        </div>
        <div className="inputBox">
          <input
            value={eduInfo.to}
            id={`${eduInfo.key}-to`}
            type="date"
            className="inputToDate"
            onChange={(e) => {
              handleChange("to", e.target.value);
            }}
          />
          <label htmlFor={`${eduInfo.key}-to`}>To: </label>
        </div>
        <Button
          text="Add"
          className="addButton"
          type="submit"
          onCLick={handleMoreSchool}
        />
      </form>
    </>
  );
}
