// Import the link props
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./Button";

interface INavLink {
  text: string;
  href: string;
}

const navLinks: INavLink[] = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "About", href: "/about" },
];

// add the React NavBar Element
export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // header value
    <header className="sticky top-0 flex bg-white p-6 shadow-md transition-all">
      <Link href="/">
        <a className="flex items-center text-xl text-neutral-400 transition-all hover:text-neutral-900">
          <div>d1</div>
          <div className="font-bold text-orange-600">dev</div>
          <div>.io</div>
        </a>
      </Link>
      <div className="w-full" />
      <div
        className={`flex h-auto flex-col items-center md:flex-row md:space-y-0 md:space-x-2 ${
          isOpen ? "space-y-4" : ""
        }`}
      >
        <Button
          className="prose-lg flex h-fit w-fit max-w-none flex-col py-1 px-6 font-medium text-neutral-400 hover:text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "╳" : "☰"}
        </Button>
        <div
          className={`flex flex-col items-center space-y-2 overflow-hidden transition-all md:h-fit md:flex-row md:space-y-0 md:space-x-2 ${
            isOpen ? "h-fit" : "h-0"
          }`}
        >
          {navLinks.map((item) => (
            <Link href={item.href} key={`navlink-${item.text}`}>
              <a
                className={`font-medium transition active:text-orange-700
                ${
                  router.pathname === item.href
                    ? "text-orange-600"
                    : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {item.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
