"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AuditPage() {

  const router = useRouter()

  const [tool, setTool] = useState("")
  const [plan, setPlan] = useState("")
  const [spend, setSpend] = useState("")

  function handleSubmit(e: any) {
    e.preventDefault()

    localStorage.setItem(
      "audit",
      JSON.stringify({
        tool,
        plan,
        spend,
      })
    )

    router.push("/results")
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        AI Spend Audit
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md flex flex-col gap-4"
      >

        <select
          className="p-3 rounded bg-white text-black w-full"
          onChange={(e) => setTool(e.target.value)}
        >
          <option>Select Tool</option>
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
          <option>Copilot</option>
        </select>

        <input
          placeholder="Plan"
          className="p-3 rounded bg-white text-black w-full"
          onChange={(e) => setPlan(e.target.value)}
        />

        <input
          placeholder="Monthly Spend"
          className="p-3 rounded bg-white text-black w-full"
          onChange={(e) => setSpend(e.target.value)}
        />

        <button className="bg-white text-black p-3 rounded-xl font-semibold">
          Generate Audit
        </button>

      </form>

    </main>
  )
}