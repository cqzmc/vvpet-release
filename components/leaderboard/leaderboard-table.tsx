"use client"

import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus, Crown, Medal, Award } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  name: string
  nameEn: string
  department: string
  score: number
  trend: "up" | "down" | "same"
  trendValue: number
}

const mockData: LeaderboardEntry[] = [
  { rank: 1, name: "张小明", nameEn: "Alice Zhang", department: "技术部", score: 980, trend: "up", trendValue: 12 },
  { rank: 2, name: "李大伟", nameEn: "Bob Li", department: "销售部", score: 920, trend: "up", trendValue: 8 },
  { rank: 3, name: "王芳芳", nameEn: "Fang Wang", department: "市场部", score: 875, trend: "down", trendValue: 3 },
  { rank: 4, name: "陈建国", nameEn: "James Chen", department: "技术部", score: 840, trend: "up", trendValue: 5 },
  { rank: 5, name: "刘丽华", nameEn: "Linda Liu", department: "人力资源", score: 810, trend: "same", trendValue: 0 },
  { rank: 6, name: "赵志强", nameEn: "Mike Zhao", department: "销售部", score: 785, trend: "down", trendValue: 2 },
  { rank: 7, name: "孙美玲", nameEn: "Nancy Sun", department: "市场部", score: 760, trend: "up", trendValue: 6 },
  { rank: 8, name: "周文杰", nameEn: "Peter Zhou", department: "技术部", score: 735, trend: "up", trendValue: 4 },
  { rank: 9, name: "吴晓燕", nameEn: "Sara Wu", department: "销售部", score: 710, trend: "down", trendValue: 1 },
  { rank: 10, name: "郑浩然", nameEn: "Tom Zheng", department: "人力资源", score: 685, trend: "same", trendValue: 0 },
]

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
        <Crown className="w-5 h-5 text-amber-500" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
        <Medal className="w-5 h-5 text-slate-400" />
      </div>
    )
  }
  if (rank === 3) {
    return (
      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
        <Award className="w-5 h-5 text-orange-400" />
      </div>
    )
  }
  return (
    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
      <span className="text-sm font-medium text-muted-foreground">{rank}</span>
    </div>
  )
}

function TrendIndicator({ trend, value }: { trend: "up" | "down" | "same"; value: number }) {
  if (trend === "up") {
    return (
      <div className="flex items-center gap-1 text-emerald-600">
        <TrendingUp className="w-4 h-4" />
        <span className="text-xs">+{value}</span>
      </div>
    )
  }
  if (trend === "down") {
    return (
      <div className="flex items-center gap-1 text-red-500">
        <TrendingDown className="w-4 h-4" />
        <span className="text-xs">-{value}</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <Minus className="w-4 h-4" />
      <span className="text-xs">--</span>
    </div>
  )
}

export function LeaderboardTable() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-[80px_1fr_140px_120px_100px] bg-muted/50 px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border">
        <div>排名 Rank</div>
        <div>姓名 Name</div>
        <div>部门 Dept.</div>
        <div className="text-right">积分 Score</div>
        <div className="text-right">趋势 Trend</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border">
        {mockData.map((entry, index) => (
          <div
            key={entry.rank}
            className={cn(
              "grid grid-cols-[80px_1fr_140px_120px_100px] px-4 py-3 items-center transition-colors hover:bg-accent/50",
              index < 3 && "bg-primary/5"
            )}
          >
            {/* Rank */}
            <div className="flex items-center">
              <RankBadge rank={entry.rank} />
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{entry.name}</span>
              <span className="text-xs text-muted-foreground">{entry.nameEn}</span>
            </div>

            {/* Department */}
            <div>
              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                {entry.department}
              </span>
            </div>

            {/* Score */}
            <div className="text-right">
              <span className="font-semibold text-lg text-primary tabular-nums">
                {entry.score.toLocaleString()}
              </span>
            </div>

            {/* Trend */}
            <div className="flex justify-end">
              <TrendIndicator trend={entry.trend} value={entry.trendValue} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-muted/30 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p className="mb-1">
            <span className="font-medium">规则说明：</span>
            积分每日更新，排名变化基于上周数据对比
          </p>
          <p>
            <span className="font-medium">Rules:</span>{" "}
            Points updated daily. Rank changes based on last week comparison.
          </p>
        </div>
      </div>
    </div>
  )
}
