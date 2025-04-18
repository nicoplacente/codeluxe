export default function SectionContainer({ children }) {
  return (
    <section className="bg-glass backdrop-blur-md rounded-xl border border-primary-txt/10 p-6 flex flex-col gap-6 shadow-secondary/10 shadow-lg">
      {children}
    </section>
  );
}
