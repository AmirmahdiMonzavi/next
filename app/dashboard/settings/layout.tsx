export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-green-500 p-4 mb-4 text-center">
        Settings Layout
      </header>
      {children}
    </>
  );
}
