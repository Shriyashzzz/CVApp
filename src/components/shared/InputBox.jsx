export default function InputBox({
  name = "",
  labelName = "",
  id = "",
  boxType = "text",
  minimum,
  maximum,
  required = false,
  containerName = "",
  value,
  onChange,
  data,
}) {
  const handleOnChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={containerName}>
      <label htmlFor={id}>{labelName}</label>
      <input
        name={name}
        value={value || ""}
        id={id}
        type={boxType}
        className={boxType}
        minLength={minimum > 0 ? minimum : undefined}
        maxLength={maximum > 0 ? maximum : undefined}
        required={required}
        onChange={handleOnChange}
      />
    </div>
  );
}
