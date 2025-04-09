export default function InputButton({ children, action }) {
  return (
    <button
      className="px-2 border border-black rounded hover:bg-cyan-600"
      onClick={action}
    >
      {children}
    </button>
  );
}
