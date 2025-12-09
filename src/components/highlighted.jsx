export default function Highlighted({ children, color }) {
  return (
    <span className={`${color ? "font-medium" : "font-semibold"} ${color}`}>
      {children}
    </span>
  );
}
