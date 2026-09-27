import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Building", href: "#building" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#direction" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#home"
          className="text-sm font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          Muhsin Hassan
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-border bg-bg transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 pt-2 sm:px-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
