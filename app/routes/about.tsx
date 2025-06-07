import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "About - Fyke Tonel" }];

export default function About() {
  return (
    <main className="min-h-screen p-8 font-typewriter">
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello, I am <span className="font-bold">Fyke Tonel</span>, a 21-year-old aspiring Flutter Developer passionate about crafting mobile experiences with elegance and performance.
        </p>
        <div>
          <h3 className="text-2xl mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Flutter & Dart</li>
            <li>Python</li>
            <li>Git & GitHub</li>
            <li>MySQL, PostgreSQL, SQLite</li>
            <li>Supabase & Firebase</li>
            <li>Node.js & Express.js</li>
            <li>TypeScript & JavaScript</li>
            <li>Docker & Deno</li>
            <li>Postman & Google Cloud Platforms</li>
          </ul>
        </div>
      </section>
    </main>
  );
} 