import InputBox from "./shared/InputBox.jsx";

export default function GeneralInfoForm({ data, onChange }) {
  return (
    <section className="generalInfoBox">
      <InputBox
        labelName="name: "
        id="inputName"
        containerName="nameContainer"
        data={data}
        value={data.name}
        onChange={onChange}
        name="name"
      />

      <InputBox
        labelName="email: "
        id="inputEmail"
        containerName="emailContainer"
        data={data}
        value={data.email}
        onChange={onChange}
        name="email"
      />
      <InputBox
        labelName="phone: "
        id="inputPhone"
        containerName="phoneContainer"
        data={data}
        value={data.phone}
        onChange={onChange}
        name="phone"
      />
    </section>
  );
}
