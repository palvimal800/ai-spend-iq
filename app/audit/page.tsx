"use client";

import { useState } from "react";

export default function AuditPage() {

const [tool, setTool] = useState("");
const [plan, setPlan] = useState("");
const [spend, setSpend] = useState("");

return (

<main className="min-h-screen bg-black text-white p-10">
  <h1 className="text-5xl font-bold mb-10">AI Spend Audit</h1>

  <div className="flex flex-col gap-4 max-w-xl">

    <select
      className="p-3 rounded bg-white text-black"
      onChange={(e) => setTool(e.target.value)}
    >
      <option>Select Tool</option>
      <option>ChatGPT</option>
      <option>Claude</option>
      <option>Cursor</option>
      <option>Copilot</option>
      <option>Gemini</option>
      <option>OpenAI API</option>
      <option>Anthropic API</option>
      <option>Windsurf</option>
    </select>

    <input
      placeholder="Plan"
      className="p-3 rounded bg-white text-black"
      onChange={(e) => setPlan(e.target.value)}
    />

    <input
      placeholder="Monthly Spend"
      type="number"
      className="p-3 rounded bg-white text-black"
      onChange={(e) => setSpend(e.target.value)}
    />

    <input
      placeholder="Number of Seats"
      type="number"
      className="p-3 rounded bg-white text-black"
      onChange={(e) => setSeats(e.target.value)}
    />

    <input
      placeholder="Team Size"
      type="number"
      className="p-3 rounded bg-white text-black"
      onChange={(e) => setTeamSize(e.target.value)}
    />

    <textarea
      placeholder="Use Case"
      className="p-3 rounded bg-white text-black"
      onChange={(e) => setUseCase(e.target.value)}
    />

    <button
      className="bg-white text-black p-3 rounded-xl font-semibold"
    >
      Generate Audit
    </button>

  </div>
</main>
)
}