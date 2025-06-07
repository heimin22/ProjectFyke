import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Contact - Fyke Tonel" }];

export default function Contact() {
  return (
    <main className="min-h-screen p-8 font-typewriter">
      <h2 className="text-4xl mb-6">Contact</h2>
      <p className="mb-4">
        Interested in collaborating or have questions? Reach out via email at{' '}
        <a
          href="mailto:athrundiscinity@protonmail.com"
          className="underline hover:text-gray-700"
        >
          athrundiscinity@protonmail.com
        </a>
      </p>
      <p>
        Check out my GitHub profile:{' '}
        <a
          href="https://github.com/heimin22"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          github.com/your-github-username
        </a>
      </p>
    </main>
  );
} 