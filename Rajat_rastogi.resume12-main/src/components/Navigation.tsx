"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "EXPERIENCE", href: "/experience" },
    { name: "SKILLS", href: "/skills" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/Group-5188-1768738376640.png?width=8000&height=8000&resize=contain"
                alt="Logo"
                width={50}
                height={50}
                className="h-10 w-auto dark:invert-0 invert"
              />
            </Link>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-900 dark:hover:text-blue-400 ${
                  pathname === link.href ? "text-blue-900 dark:text-blue-400" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
