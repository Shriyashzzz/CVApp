export default function Button({ text, type, onCLick, className }) {
  return (
    <button type={type} onClick={onCLick} className={className}>
      {text}
    </button>
  );
}
