import { Suspense } from "react";

import Loading from "./loading";

const textPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved Dashboard Content");
    }, 2000);
  });
};

export default async function Page() {
  const text = await textPromise();

  return (
    <Suspense fallback={<Loading />}>
      <h1 className="text-center">{text as string}</h1>
    </Suspense>
  );
}
