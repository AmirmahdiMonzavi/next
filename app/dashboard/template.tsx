"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<string>();
  const pathname = usePathname();

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <section>
      <header className="bg-red-500 text-center p-4">
        <h1>Dashboard Layout</h1>
        <input
          value={value}
          onChange={changeInputValue}
          type="text"
          placeholder="Enter somthing then change the route"
          className="px-4 py-2 w-[400px] border-2 border-black"
        />
        <div>
          <Link
            href="/dashboard"
            className={`block ${
              pathname === "/dashboard"
                ? "font-bold text-blue-200"
                : "text-white underline"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/settings"
            className={`block ${
              pathname === "/dashboard/settings"
                ? "font-bold text-blue-200"
                : "text-white underline"
            }`}
          >
            Settings
          </Link>
        </div>
      </header>
      {children}
    </section>
  );
}
