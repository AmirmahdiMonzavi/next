export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header className="bg-red-500 text-center  p-4">Dashboard Layout</header>
      {children}
    </section>
  );
}
