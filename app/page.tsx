export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold mb-6 text-center">
        AISpendIQ
      </h1>

      <p className="text-gray-400 text-center max-w-2xl text-lg mb-8">
        Discover how much your startup is overspending on AI tools like ChatGPT, Claude, Cursor, and Copilot.
      </p>

      <a
        href="/audit"
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
      >
        Start Free Audit
      </a>

    </main>
  )
}