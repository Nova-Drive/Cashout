export default function ResultSquare({ children, value }) {
  return (
    <div className="p-10 border-4 bg-cyan-500 border-black rounded-2xl space-y-2">
      <h1>{children}</h1>
      <h1 className="text-4xl font-bold">${value}</h1>
    </div>
  );
}
