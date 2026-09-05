import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Pioneer Investment Funds Portal",
    description:
      "An internal web portal for ticket management, vendor (terceros) tracking, and admin operations, secured with Azure AD single sign-on.",
    technologies: ["HTML", "CSS", "JavaScript", "MSAL.js", "Supabase"],
    link: "https://pioneer-web-h5t3.onrender.com",
  },
  {
    title: "Community Service Projects App",
    description:
      "A full-stack MVC web application to manage organizations, projects, and categories, built from scratch with server-side rendering and PostgreSQL.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    link: "https://github.com/your-username/community-service-projects",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer and IT professional learning Next.js
          and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
