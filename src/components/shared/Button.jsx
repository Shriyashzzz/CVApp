export default function Button({ text, type, onCLick }) {
  return (
    <button type={type} onClick={onCLick}>
      {text}
    </button>
  );
}
