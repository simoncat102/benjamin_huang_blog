import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-neutral-200 text-neutral-700 py-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <Link href="/">BH's Blog</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
