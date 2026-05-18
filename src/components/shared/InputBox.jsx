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
    if (data) {
      onChange({
        ...data,
        [e.target.name]: e.target.value,
      });
    } else {
      onChange(e);
    }
  };

  return (
    <div className={"input-group"}>
      <input
        name={name}
        value={value || ""}
        id={id}
        type={boxType}
        className="input"
        minLength={minimum > 0 ? minimum : undefined}
        maxLength={maximum > 0 ? maximum : undefined}
        required={required}
        onChange={handleOnChange}
      />
      <label htmlFor={id} className="user-label">
        {labelName}
      </label>
    </div>
  );
}
