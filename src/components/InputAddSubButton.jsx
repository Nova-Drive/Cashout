export default function InputButton({
  children,
  action,
  style,
  hoverColor = "hover:bg-cyan-600",
}) {
  const buttonStyle =
    "px-2 border border-black rounded " + style + " " + hoverColor;
  return (
    <button className={buttonStyle} onClick={action}>
      {children}
    </button>
  );
}
