export default function Header({ children }) {
  return (
    <h1 className="text-stone-600 font-bold text-4xl justify-items-center">
      {children}
    </h1>
  );
}
