import { useEffect, useState } from "react";
import Button from "./shared/Button";
export default function EducationInfoForm({
  educationArray,
  setEducationArray,
}) {
  const [eduInfo, setEducationInfo] = useState({
    school: "",
    major: "",
    from: "",
    to: "",
    key: crypto.randomUUID(),
  });

  const handleChange = (id, field, newValue) => {
    setEducationInfo({ ...eduInfo, [field]: newValue });
  };

  const handleMoreSchool = (e) => {
    e.preventDefault();
    setEducationArray([...educationArray, eduInfo]);
    setEducationInfo({
      school: "",
      major: "",
      from: "",
      to: "",
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
            onChange={(e) =>
              handleChange(eduInfo.key, "school", e.target.value)
            }
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
            onChange={(e) => handleChange(eduInfo.key, "major", e.target.value)}
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
              handleChange(eduInfo.key, "from", e.target.value);
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
              handleChange(eduInfo.key, "to", e.target.value);
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
