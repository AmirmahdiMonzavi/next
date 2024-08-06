"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center">
      <h1>{error.message}</h1>
      <button
        className="bg-green-500 px-2 py-4 text-white mt-4 rounded-xl"
        onClick={() => reset()}
      >
        Try Again(re-render the route)
      </button>
    </div>
  );
}
