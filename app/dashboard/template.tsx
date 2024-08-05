"use client";

import { ChangeEvent, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<string>();

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
      </header>
      {children}
    </section>
  );
}
