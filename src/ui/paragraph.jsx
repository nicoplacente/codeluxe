export default function Paragraph({ children, className }) {
  return <p className={`${className} font-light `}>{children}</p>;
}
