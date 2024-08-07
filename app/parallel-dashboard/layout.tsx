import Link from "next/link";

export default function Layout({
  children,
  analytics,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div className="flex space-x-4">
        <div className="flex items-center justify-center p-20 border-black border-2">
          {analytics}
        </div>
        <div className="flex items-center justify-center p-20 border-black border-2">
          {notifications}
        </div>
      </div>
    </>
  );
}
