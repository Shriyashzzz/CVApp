import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Button from "./components/shared/Button";
import EducationInfoForm from "./components/EducationInfoForm";
import "./styles/App.css";
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

  return (
    <>
      <main></main>
      <aside>
        <GeneralInfoForm data={generalInfo} onChange={setGeneralInfo} />
        <EducationInfoForm data={educationInfo} onChange={setEducationInfo} />
        <Button text="Add More" type="button" onCLick={handleAddMore} />
      </aside>
    </>
  );
}
