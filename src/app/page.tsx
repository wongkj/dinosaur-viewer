import { Navbar } from "./_components/Navbar/Navbar";

export default function Home() {
  const title = "Dinosaur Viewer";

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col">
        <Navbar />
        <section className="flex flex-1 items-center justify-center px-6 py-16">
          <h1>{title}</h1>
        </section>
      </main>
    </div>
  );
}
