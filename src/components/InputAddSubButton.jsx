export default function InputButton({ children, action, style }) {
  const buttonStyle =
    "px-2 border border-black rounded hover:bg-cyan-600 " + style;
  return (
    <button className={buttonStyle} onClick={action}>
      {children}
    </button>
  );
}
