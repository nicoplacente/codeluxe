import TeamMemberCard from "./team-member-card";

export default function TeamSection({ 
  title, 
  teamMembers, 
  role 
}) {
  return (
    <div className="mb-12">
      <h4 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">
        {title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((persona, index) => (
          <TeamMemberCard
            key={index}
            nombre={persona.nombre}
            imagen={persona.imagen}
            rol={role}
            linkedinHref={persona.linkedin}
          />
        ))}
      </div>
    </div>
  );
}
