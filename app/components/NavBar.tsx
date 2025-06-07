import { NavLink } from "@remix-run/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 font-typewriter">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative px-3 py-1 border border-black dark:border-white rounded-sm tracking-widest uppercase text-sm flex items-center ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-gray-200 hover:text-black"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute -left-3 w-2 h-2 bg-black rounded-full"></span>
              )}
              <span className="ml-2">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
} 