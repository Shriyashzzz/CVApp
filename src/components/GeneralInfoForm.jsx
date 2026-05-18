import InputBox from "./shared/InputBox.jsx";

export default function GeneralInfoForm({ data, onChange }) {
  return (
    <section className="generalInfoBox">
      <InputBox
        labelName="Name"
        id="inputName"
        containerName="nameContainer"
        data={data}
        value={data.name}
        onChange={onChange}
        name="name"
        required={true}
        minimum={0}
        boxType="text"
      />

      <InputBox
        labelName="Email"
        id="inputEmail"
        containerName="emailContainer"
        data={data}
        value={data.email}
        onChange={onChange}
        name="email"
        required={true}
        minimum={0}
        boxType="email"
      />
      <InputBox
        labelName="Phone"
        id="inputPhone"
        containerName="phoneContainer"
        data={data}
        value={data.phone}
        onChange={onChange}
        name="phone"
        required={true}
        minimum={0}
        boxType="number"
      />
    </section>
  );
}
