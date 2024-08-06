import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col text-center">
      <h1>Notifications</h1>
      <Link href="parallel-dashboard/old" className="underline">
        Old
      </Link>
    </div>
  );
}
