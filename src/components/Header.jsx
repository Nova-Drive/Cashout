export default function Header({ style = "", children }) {
  let cname = style + " text-black font-bold";
  return <h1 className={cname}>{children}</h1>;
}
