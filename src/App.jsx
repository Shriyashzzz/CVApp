import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Button from "./components/shared/Button";
import EducationInfoForm from "./components/EducationInfoForm";
import "./styles/App.css";
import ExperienceInfoForm from "./components/ExperienceInfoForm";
export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Shriyash",
    email: "lorempossem@gmail.com",
    phone: "123456789",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: "loremSchool",
      major: "Computer Science",
      from: new Date().toISOString().split("T")[0],
      to: new Date().toISOString().split("T")[0],
      key: crypto.randomUUID(),
    },
  ]);
  const handleAddMore = () => {
    const newObj = {
      school: "loremSchool",
      major: "loremPosem Major",
      from: new Date().toISOString().split("T")[0],
      to: new Date().toISOString().split("T")[0],
      key: crypto.randomUUID(),
    };
    setEducationInfo([...educationInfo, newObj]);
  };

  const [experienceArray, setExperienceArray] = useState([]);
  const handleAddMoreWorkExp = () => {
    const newWorkExp = {
      company: "Apple",
      position: "SWE",
      id: crypto.randomUUID(),
      responsibilities: [
        "Test the new feature",
        "Delete the production by accident :p",
      ],
    };
    setExperienceArray(...experienceArray, newWorkExp);
  };

  return (
    <>
      <main></main>
      <aside>
        <p>Contact</p>
        <GeneralInfoForm data={generalInfo} onChange={setGeneralInfo} />
        <p> Education</p>
        <section className="educationInfoBox">
          <EducationInfoForm data={educationInfo} onChange={setEducationInfo} />
          <Button text="Add More" type="button" onCLick={handleAddMore} />
        </section>
        <p>Work Experience</p>
        <section>
          <ExperienceInfoForm
            experienceArray={experienceArray}
            setExperienceArray={setExperienceArray}
          />
          <Button
            text="Add Experience + "
            onCLick={() => {
              handleAddMoreWorkExp;
            }}
          />
        </section>
      </aside>
    </>
  );
}
