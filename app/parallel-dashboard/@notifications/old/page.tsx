import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center">
      <h1>Old Notifications</h1>
      <Link className="underline" href="/parallel-dashboard/">
        Default
      </Link>
    </div>
  );
}
