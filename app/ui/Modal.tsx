"use client";

import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 text-center" />
      <div className="fixed bg-white w-1/2 shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-10">
        {children}
        <button onClick={handleBack} className="underline">
          Back
        </button>
      </div>
    </>
  );
}
