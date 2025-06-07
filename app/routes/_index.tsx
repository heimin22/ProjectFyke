import type { MetaFunction } from "@remix-run/node";
import Typewriter from "../components/Typewriter";
import Reveal from "../components/Reveal";

export const meta: MetaFunction = () => {
  return [
    { title: "Fyke Tonel Portfolio" },
    { name: "description", content: "A portfolio of Fyke Tonel" }, 
  ];
};

export default function Index() {
  return (
    <div className="flex flex-nowrap flex-col md:flex-row">
      {/* About Section */}
      <Reveal>
        <section id="about" className="flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl md:text-6xl text-green-400">
            <Typewriter text="Fyke Tonel" speed={150} />
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-green-300">
            <Typewriter text="Aspiring Flutter Developer" speed={100} />
          </h2>
          <p className="mt-6 max-w-xl">
            I am a 21-year-old developer with expertise in Flutter, Dart, Python, Git, SQL databases, and modern web technologies.
          </p>
        </section>
      </Reveal>
      {/* Projects Section */}
      <Reveal>
        <section id="projects" className="p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="bg-gray-800 p-6 hover:opacity-80 transform hover:-translate-y-1 transition-transform ease-out duration-200 lg:col-span-2 lg:row-span-2">
            <h3 className="text-3xl mb-2">LockerApp</h3>
            <p>Secured and media-hiding application built with Flutter.</p>
          </div>
          <div className="bg-gray-800 p-6 hover:opacity-80 transform hover:-translate-y-1 transition-transform ease-out duration-200">
            <h3 className="text-3xl mb-2">Pasada</h3>
            <p>Ride-hailing app tailored for modernized jeepneys in the Philippines.</p>
          </div>
          <div className="bg-gray-800 p-6 hover:opacity-80 transform hover:-translate-y-1 transition-transform ease-out duration-200">
            <h3 className="text-3xl mb-2">Other Projects</h3>
            <p>Experiments with web and mobile technologies.</p>
          </div>
        </section>
      </Reveal>
      {/* Contact Section */}
      <Reveal>
        <section id="contact" className="flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-green-400">Contact</h2>
          <ul className="space-y-2">
            <li>
              Email: <a href="mailto:athrundiscinity@protonmail.com" className="underline">athrundiscinity@protonmail.com</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/heimin22" target="_blank" rel="noopener noreferrer" className="underline">heimin22</a>
            </li>
          </ul>
        </section>
      </Reveal>
    </div>
  );
}
