export default function Paragraph({ children, className }) {
  return <p className={`${className} font-light text-pretty`}>{children}</p>;
}
