// src/components/navigation.tsx
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link href="/">
        <p className="text-blue-300 hover:text-blue-100">Hjem</p>
      </Link>
      <Link href="/prosjekter">
        <p className="text-blue-300 hover:text-blue-100">Prosjekter</p>
      </Link>
    </nav>
  );
}
