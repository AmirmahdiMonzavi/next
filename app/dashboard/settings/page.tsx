"use client";

const getRandomInt = () => {
  return Math.floor(2 * Math.random());
};

export default function Page() {
  const number = getRandomInt();

  if (number < 1) {
    throw new Error("Something went wrong");
  }

  return <h1 className="text-center">Settings Page</h1>;
}
