import type { MetaFunction } from "@remix-run/node";
import Typewriter from "../components/Typewriter";
import Reveal from "../components/Reveal";
import Starfield from "../components/Starfield";

export const meta: MetaFunction = () => {
  return [
    { title: "Fyke Tonel Portfolio" },
    { name: "description", content: "A portfolio of Fyke Tonel" }, 
  ];
};

export default function Index() {
  return (
    <div className="relative">
      <Starfield />
      <div className="flex flex-nowrap relative z-10">
      {/* About Section */}
      <Reveal>
        <section id="about" className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl md:text-6xl">
            <Typewriter text="Fyke Tonel" speed={150} />
          </h1>
            <h2 className="mt-4 text-xl md:text-2xl">
            <Typewriter text="Aspiring Flutter Developer" speed={100} />
          </h2>
          <p className="mt-6 max-w-xl">
            I am a 21-year-old developer with expertise in Flutter, Dart, Python, Git, SQL databases, and modern web technologies.
          </p>
        </section>
      </Reveal>
      {/* Projects Section */}
      <Reveal>
          <section id="projects" className="p-16 md:pl-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="https://github.com/heimin22/Pasada" target="_blank" rel="noopener noreferrer" className="md:col-span-2 md:row-span-2 bg-gray-800 p-6 hover:opacity-80 transition duration-200 block">
              <h3 className="text-3xl mb-2">Pasada</h3>
              <p>Ride-hailing app tailored for modernized jeepneys in the Philippines built with Flutter.</p>
            </a>
            <a href="https://github.com/heimin22/LockerApp" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 hover:opacity-80 transition duration-200 block">
              <h3 className="text-3xl mb-2">LockerApp</h3>
              <p>Secured and media-hiding application built with Flutter.</p>
            </a>
            <a href="https://github.com/heimin22?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 hover:opacity-80 transition duration-200 block">
              <h3 className="text-3xl mb-2">Other Projects</h3>
              <p>Experiments with web and mobile technologies.</p>
            </a>
          </section>
      </Reveal>
      {/* Contact Section */}
      <Reveal>
        <section id="contact" className="flex flex-col items-center justify-center p-8 md:pl-20">
          <h2 className="text-4xl mb-4">Contact</h2>
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
    </div>
  );
}
