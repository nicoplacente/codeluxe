export default function SectionContainer({ children, className, id }) {
  return (
    <section
      id={id}
      className={`bg-glass w-full backdrop-blur-md rounded-xl h-full border border-primary-txt/10 p-6 flex flex-col gap-6 shadow-secondary/10 shadow-lg ${className}`}
    >
      {children}
    </section>
  );
}
