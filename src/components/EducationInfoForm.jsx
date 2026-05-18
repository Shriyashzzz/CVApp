import { useEffect, useState } from "react";
import Button from "./shared/Button";
export default function EducationInfoForm({
  educationArray,
  setEducationArray,
}) {
  const [eduInfo, setEducationInfo] = useState({
    school: "",
    major: "",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
    key: crypto.randomUUID(),
  });

  const handleChange = (id, field, newValue) => {
    setEducationInfo({ ...eduInfo, [field]: newValue });
  };

  const handleMoreSchool = () => {
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
      <article className="educationItem" key={eduInfo.key}>
        <div className="inputBox">
          <label htmlFor={`${eduInfo.key}-school`}>School: </label>
          <input
            value={eduInfo.school}
            id={`${eduInfo.key}-school`}
            type="text"
            className="inputSchool"
            onChange={(e) =>
              handleChange(eduInfo.key, "school", e.target.value)
            }
          />
        </div>
        <div className="inputBox">
          <label htmlFor={`${eduInfo.key}-major`}>Major: </label>
          <input
            value={eduInfo.major}
            id={`${eduInfo.key}-major`}
            type="text"
            className="inputMajor"
            onChange={(e) => handleChange(eduInfo.key, "major", e.target.value)}
          />
        </div>
        <div className="graduationInfo inputBox">
          <label htmlFor={`${eduInfo.key}-from`}>From: </label>
          <input
            value={eduInfo.from}
            id={`${eduInfo.key}-from`}
            type="date"
            className="inputFromDate"
            onChange={(e) => handleChange(eduInfo.key, "from", e.target.value)}
          />
        </div>
        <div className="inputBox">
          <label htmlFor={`${eduInfo.key}-to`}>To: </label>
          <input
            value={eduInfo.to}
            id={`${eduInfo.key}-to`}
            type="date"
            className="inputToDate"
            onChange={(e) => handleChange(eduInfo.key, "to", e.target.value)}
          />
        </div>
        <Button text="Add " type="button" onCLick={handleMoreSchool} />
      </article>
    </>
  );
}
