import Button from "./shared/Button";
import "../styles/asideStyle.css";
import InputBox from "./shared/InputBox";
import { useState } from "react";
export default function ExperienceInfoForm({
  experienceArray,
  setExperienceArray,
}) {
  const [experienceInfo, setExperienceInfo] = useState({
    company: "Apple",
    position: "SWE",
    id: crypto.randomUUID(),
    responsibilities: [
      "Test the new feature",
      "Delete the production by accident :p",
    ],
  });

  const responsibilitiesOnChange = (e, indexToReplce) => {
    setExperienceInfo({
      ...experienceInfo,
      responsibilities: experienceInfo.responsibilities.map((item, index) => {
        return index === indexToReplce ? e.target.value : item;
      }),
    });
  };

  const addMoreResponsibilityHandler = () => {
    setExperienceInfo({
      ...experienceInfo,
      responsibilities: [...experienceInfo.responsibilities, ""],
    });
  };

  const removeResponsibilty = (indexToRemove) => {
    setExperienceInfo({
      ...experienceInfo,
      responsibilities: experienceInfo.responsibilities.filter(
        (element, index) => index !== indexToRemove,
      ),
    });
  };
  return (
    <article className="ExperienceInfoForm">
      <InputBox
        key={`${experienceInfo.id}-company`}
        name="company"
        labelName="Company: "
        boxType="text"
        required={true}
        value={experienceInfo.company}
        containerName="companyInfoBox"
        onChange={(e) => {
          setExperienceInfo({
            ...experienceInfo,
            company: e.target.value,
          });
        }}
      ></InputBox>
      <InputBox
        key={`${experienceInfo.id}-position`}
        name="position"
        labelName="Position: "
        boxType="text"
        required={true}
        value={experienceInfo.position}
        containerName="positionInfoBox"
        onChange={(e) => {
          setExperienceInfo({
            ...experienceInfo,
            position: e.target.value,
          });
        }}
      ></InputBox>
      {experienceInfo.responsibilities.map((item, index) => (
        <div
          className="responsibilityBox"
          key={`${experienceInfo.id}-responisbility-${index}`}
        >
          <InputBox
            name="resposibilities"
            labelName={`Resposibility ${index + 1}: `}
            boxType="text"
            required={false}
            value={experienceInfo.responsibilities[index]}
            containerName="responsibilitiesInfoBox"
            onChange={(e) => responsibilitiesOnChange(e, index)}
          ></InputBox>
          <Button text="delete" onCLick={() => removeResponsibilty(index)} />
        </div>
      ))}
      <div className="buttonContainer">
        <Button
          text="Add Responsibility +"
          onCLick={addMoreResponsibilityHandler}
        />
      </div>
    </article>
  );
}
