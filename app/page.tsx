"use client"

import { useState } from "react"
import { Sidebar } from "@/components/leaderboard/sidebar"
import { TopBar } from "@/components/leaderboard/top-bar"
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table"
import { BadgePanel } from "@/components/leaderboard/badge-panel"

export default function LeaderboardPage() {
  const [selectedRbu, setSelectedRbu] = useState("all")
  const [selectedDimension, setSelectedDimension] = useState("total")

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[180px]">
        {/* Top Bar */}
        <TopBar
          selectedRbu={selectedRbu}
          onRbuChange={setSelectedRbu}
          selectedDimension={selectedDimension}
          onDimensionChange={setSelectedDimension}
        />

        {/* Content Area */}
        <main className="p-6">
          <div className="flex gap-6">
            {/* Leaderboard Card */}
            <div className="flex-1">
              <LeaderboardTable />
            </div>

            {/* Badge Panel */}
            <div className="w-[320px] shrink-0">
              <BadgePanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
