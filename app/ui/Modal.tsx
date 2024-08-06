export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40" />
      <div className="fixed bg-white w-1/2 shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
}
