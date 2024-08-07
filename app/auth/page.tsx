import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/auth/login" className="text-center underline block">
        Login
      </Link>
      <Link href="/auth/signup" className="text-center underline block">
        Signup
      </Link>
    </div>
  );
}
