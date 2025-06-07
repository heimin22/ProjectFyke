import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Work - Fyke Tonel" }];

export default function Work() {
  return (
    <main className="min-h-screen p-8 font-typewriter">
      <h2 className="text-4xl mb-6">Work</h2>
      <div className="grid grid-cols-3 gap-6">  
        <div className="col-span-2 row-span-1 bg-gray-100 p-6 reveal">
          <h3 className="text-2xl mb-2">LockerApp</h3>
          <p>
            A secured media-hiding application built with Flutter that helps you protect your sensitive files and images.
          </p>
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 p-6 reveal">
          <h3 className="text-2xl mb-2">Pasada</h3>
          <p>
            A ride-hailing application tailored for passengers of modernized jeepneys in the Philippines, currently operating on the Bayan to Malinta route.
          </p>
        </div>
      </div>
    </main>
  );
} 