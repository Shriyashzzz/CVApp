import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Button from "./components/shared/Button";
import ExperienceInfoForm from "./components/ExperienceInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";

import CV from "./components/Cv";
import "./styles/App.css";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Shriyash",
    email: "lorempossem@gmail.com",
    phone: "123456789",
  });

  const [educationArray, setEducationArray] = useState([]);

  const [experienceArray, setExperienceArray] = useState([]);

  return (
    <>
      <aside>
        <p>Contact</p>
        <GeneralInfoForm data={generalInfo} onChange={setGeneralInfo} />
        <p> Education</p>
        <section className="educationInfoBox">
          <EducationInfoForm
            educationArray={educationArray}
            setEducationArray={setEducationArray}
          />
        </section>
        <p>Work Experience</p>
        <section>
          <ExperienceInfoForm
            experienceArray={experienceArray}
            setExperienceArray={setExperienceArray}
          />
        </section>
      </aside>
      <main>
        <CV />
      </main>
    </>
  );
}
