import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Button from "./components/shared/Button";
import ExperienceInfoForm from "./components/ExperienceInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import CvRender from "./components/CvRender";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Shriyash",
    email: "lorempossem@gmail.com",
    phone: "123456789",
  });

  const [educationArray, setEducationArray] = useState([
    {
      school: "loremSchool",
      major: "Computer Science",
      from: new Date().toISOString().split("T")[0],
      to: new Date().toISOString().split("T")[0],
      key: crypto.randomUUID(),
    },
  ]);

  const [experienceArray, setExperienceArray] = useState([]);

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
          educationArray={educationArray}
          experienceArray={experienceArray}
        />
      </main>
    </>
  );
}
