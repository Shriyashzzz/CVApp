import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Button from "./components/shared/Button";
import ExperienceInfoForm from "./components/ExperienceInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import CvRender from "./components/CvRender";
import "./app.css";
export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Shriyash",
    email: "lorempossem@gmail.com",
    phone: "123456789",
  });

  const [educationArray, setEducationArray] = useState([]);

  const [experienceArray, setExperienceArray] = useState([]);
  const [eduInfo, setEducationInfo] = useState({
    school: "",
    major: "",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
    key: crypto.randomUUID(),
  });
  const editEducationItem = (field, newValue) => {
    setEducationInfo((prev) => ({ ...prev, [field]: newValue }));
  };

  return (
    <>
      <aside>
        <section className="addBox">
          <h2>Contact</h2>

          <GeneralInfoForm data={generalInfo} onChange={setGeneralInfo} />
        </section>

        <section className="addBox">
          <h2> Education</h2>
          <EducationInfoForm
            educationArray={educationArray}
            setEducationArray={setEducationArray}
            eduInfo={eduInfo}
            handleChange={editEducationItem}
            setEducationInfo={setEducationInfo}
          />
        </section>

        <section className="addBox workExpBox">
          <h2>Work Experience</h2>
          <ExperienceInfoForm
            experienceArray={experienceArray}
            setExperienceArray={setExperienceArray}
          />
        </section>
      </aside>
      <main>
        <CvRender
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          educationArray={educationArray}
          setEducationArray={setEducationArray}
          experienceArray={experienceArray}
          setExperienceArray={setExperienceArray}
          editEducationItem={editEducationItem}
          setEducationInfo={setEducationInfo}
        />
      </main>
    </>
  );
}
