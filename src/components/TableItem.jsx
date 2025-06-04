export default function TableItem({ type, children }) {
  const className = "border-b border-gray-700 py-0.5";

  return type === "head" ? (
    <th className={className}>{children}</th>
  ) : (
    <td className={className}>{children}</td>
  );
}
