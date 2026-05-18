import Button from "./shared/Button";
import "../styles/asideStyle.css";
import InputBox from "./shared/InputBox";
import { useState, useEffect } from "react";

export default function ExperienceInfoForm({
  experienceArray,
  setExperienceArray,
  experienceInfo,
  setExperienceInfo,
}) {
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

  const handleAddWorkExp = () => {
    setExperienceArray([...experienceArray, experienceInfo]);
    setExperienceInfo({
      company: "",
      position: "",
      id: crypto.randomUUID(),
      responsibilities: [""],
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
          <Button
            text="del"
            className="delete-button"
            onCLick={() => removeResponsibilty(index)}
          />
        </div>
      ))}
      <div className="buttonContainer">
        <button
          class="addResponsibilitybutton"
          onClick={addMoreResponsibilityHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            height="20"
            fill="none"
            class="svg-icon"
          >
            <g stroke-width="1.5" stroke-linecap="round" stroke="#de8a2a">
              <circle r="7.5" cy="10" cx="10"></circle>
              <path d="m9.99998 7.5v5"></path>
              <path d="m7.5 9.99998h5"></path>
            </g>
          </svg>
          <span class="lable">Add</span>
        </button>
        <Button
          type={"submit"}
          text="Add Experience "
          onCLick={handleAddWorkExp}
          className="addButton btnExp"
        />
      </div>
    </article>
  );
}
