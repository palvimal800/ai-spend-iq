"use client"

import { useEffect, useState } from "react"

export default function ResultsPage() {

  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const saved = localStorage.getItem("audit")

    if (saved) {
      setData(JSON.parse(saved))
    }
  }, [])

  if (!data) return null

  let savings = 0
  let recommendation = ""

  if (Number(data.spend) > 100) {
    savings = Number(data.spend) * 0.3

    recommendation =
      "You are likely overspending on premium AI subscriptions. Consider switching to lower-tier plans or optimizing API usage."
  } else {

    recommendation =
      "Your current AI spending already looks efficient."
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Audit Results
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl max-w-2xl">

        <h2 className="text-2xl font-bold mb-4">
          Potential Monthly Savings
        </h2>

        <p className="text-6xl text-green-400 font-bold mb-6">
          ${savings.toFixed(0)}
        </p>

        <p className="text-gray-300 mb-6">
          {recommendation}
        </p>

        <div className="border-t border-zinc-700 pt-4 space-y-2">
          <p>
            Tool: {data.tool}
          </p>

          <p>
            Plan: {data.plan}
          </p>

          <p>
            Current Spend: ${data.spend}
          </p>
        </div>

      </div>

    </main>
  )
}