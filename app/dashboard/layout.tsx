export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header className="bg-red-500 text-center mb-4 p-4">
        Dashboard Layout
      </header>
      {children}
    </section>
  );
}
