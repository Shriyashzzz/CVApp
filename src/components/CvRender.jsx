import { useState } from "react";
import "../styles/CvRender.css";
import Button from "./shared/Button";
import Switch from "./shared/Switch";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import DownloadBtn from "./shared/downloadBtn";
export default function CvRender({
  generalInfo,
  setGeneralInfo,
  educationArray,
  setEducationArray,
  experienceArray,
  setExperienceArray,
  experienceInfo,
  setExperienceInfo,
  setEducationInfo,
}) {
  const cvRef = useRef(null);
  const downloadCV = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "CV",
    onAfterPrint: () => console.log("PDF downloaded"),
  });

  const [editMode, setEditMode] = useState(false);

  const moveEduItemtoForm = (schoolVal, majorVal, fromVal, toVal) => {
    setEducationInfo({
      school: schoolVal,
      major: majorVal,
      from: fromVal,
      to: toVal,
      key: crypto.randomUUID(),
    });
  };

  const moveWorkItemToForm = (
    givenCompany,
    givenPosition,
    givenResponsibilities,
  ) => {
    setExperienceInfo({
      company: givenCompany,
      position: givenPosition,
      id: crypto.randomUUID(),
      responsibilities: givenResponsibilities,
    });
  };

  return (
    <>
      <div class="topButtonsContainer">
        {" "}
        <Switch
          isChecked={editMode}
          handleToggle={() => {
            setEditMode(!editMode);
          }}
          label={"Edit Mode: "}
        />
        <DownloadBtn text={"Download "} onClick={downloadCV} />
      </div>

      <section ref={cvRef} className="cvContainer">
        <h1 className="userName">{generalInfo.name}</h1>
        <div className="contactBox">
          <p>
            Email: {generalInfo.email} | Contact: {generalInfo.phone}
          </p>
        </div>

        <h2 className="userInfoHeading">EDUCATION</h2>
        <article>
          <div className="spaceBtwBox">
            <h3 className="userTitles">University</h3>
            <h3 className="userTitles">Graduation</h3>
          </div>

          {educationArray.map((element, index) => {
            return (
              <div className="spaceBtwBox" key={element.key + "cv"}>
                <p className="userInfo">
                  <i>
                    {element.school} | {element.major}
                  </i>
                </p>
                {editMode && (
                  <Button
                    type="button"
                    className="delete-button formEdit"
                    text="edit"
                    onCLick={() => {
                      moveEduItemtoForm(
                        element.school,
                        element.major,
                        element.from,
                        element.to,
                      );
                      setEducationArray((prev) =>
                        prev.filter((_, i) => i !== index),
                      );
                    }}
                  />
                )}

                <p>
                  <i>{`${element.to}`}</i>
                </p>
              </div>
            );
          })}
        </article>

        <h2 className="userInfoHeading">Professional Experience</h2>
        <article>
          <div className="spaceBtwBox">
            <h3>Company</h3>
            <h3>Position</h3>
          </div>
          {experienceArray.map((element, index) => {
            return (
              <div className="companyItem" key={element.id + "cvElements"}>
                <div className="companyInfo">
                  <h3 className="userInfo">{element.company}</h3>
                  {editMode && (
                    <Button
                      type="button"
                      className="delete-button formEdit"
                      text="edit"
                      onCLick={() => {
                        moveWorkItemToForm(
                          element.company,
                          element.position,
                          element.responsibilities,
                        );
                        setExperienceArray((prev) =>
                          prev.filter((_, i) => i !== index),
                        );
                      }}
                    />
                  )}
                  <p>
                    <i>{element.position}</i>
                  </p>
                </div>
                <ul className="workResponsoList">
                  {element.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
}
