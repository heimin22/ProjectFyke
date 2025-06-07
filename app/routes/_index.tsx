import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Fyke Tonel Portfolio" },
  { name: "description", content: "Portfolio of Fyke Tonel, Flutter Developer" },
];

export default function Index() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 font-typewriter">
      <h1 className="text-5xl mb-4 typer">Hello, I am Fyke Tonel.</h1>
      <p className="text-xl glitch">Aspiring Flutter Developer | 21 years old</p>
    </main>
  );
}
