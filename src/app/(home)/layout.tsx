import Navbar from "@/src/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-black">
      <Navbar />
      {children}
    </main>
  );
}
