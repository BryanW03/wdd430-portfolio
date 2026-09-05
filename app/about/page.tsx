import SkillCard from "@/components/SkillCard";

const skills = [
  { skill: "JavaScript / TypeScript", level: "Advanced", years: 4 },
  { skill: "Next.js / React", level: "Intermediate", years: 1 },
  { skill: "Node.js / Express", level: "Intermediate", years: 2 },
  { skill: "SQL / PostgreSQL", level: "Intermediate", years: 3 },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m an IT professional based in the Dominican Republic, working
        in an IT supervisory role and building web applications as I grow my
        full-stack development skills. This page shares more about my
        technical background.
      </p>
      <section className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <SkillCard key={s.skill} {...s} />
        ))}
      </section>
    </main>
  );
}
