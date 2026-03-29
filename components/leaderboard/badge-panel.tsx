"use client"

import { cn } from "@/lib/utils"
import { Star, Zap, Target, Flame, Award, Crown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Badge {
  id: string
  name: string
  nameEn: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  unlocked: boolean
}

const badges: Badge[] = [
  {
    id: "rising-star",
    name: "新星崛起",
    nameEn: "Rising Star",
    description: "首次进入前10名",
    icon: Star,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
    unlocked: true,
  },
  {
    id: "lightning",
    name: "闪电进步",
    nameEn: "Lightning",
    description: "单月积分增长50%",
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    unlocked: true,
  },
  {
    id: "sharpshooter",
    name: "精准射手",
    nameEn: "Sharpshooter",
    description: "连续3月达成目标",
    icon: Target,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
    unlocked: true,
  },
  {
    id: "fire-streak",
    name: "连胜之火",
    nameEn: "Fire Streak",
    description: "连续5周排名上升",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    unlocked: false,
  },
  {
    id: "elite",
    name: "精英成员",
    nameEn: "Elite Member",
    description: "累计积分达到5000",
    icon: Award,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    unlocked: false,
  },
  {
    id: "champion",
    name: "冠军之王",
    nameEn: "Champion",
    description: "获得月度第一名",
    icon: Crown,
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    unlocked: false,
  },
]

function BadgeCard({ badge }: { badge: Badge }) {
  const Icon = badge.icon

  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 rounded-xl border transition-all",
        badge.unlocked
          ? "bg-card border-border hover:shadow-md hover:-translate-y-0.5"
          : "bg-muted/50 border-transparent"
      )}
    >
      <div
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors",
          badge.unlocked ? badge.bgColor : "bg-muted"
        )}
      >
        <Icon
          className={cn(
            "w-7 h-7 transition-colors",
            badge.unlocked ? badge.color : "text-muted-foreground/40"
          )}
        />
      </div>
      <h4
        className={cn(
          "font-medium text-sm text-center",
          badge.unlocked ? "text-foreground" : "text-muted-foreground/60"
        )}
      >
        {badge.name}
      </h4>
      <p
        className={cn(
          "text-xs text-center mt-0.5",
          badge.unlocked ? "text-muted-foreground" : "text-muted-foreground/40"
        )}
      >
        {badge.nameEn}
      </p>
      <p
        className={cn(
          "text-xs text-center mt-2 leading-relaxed",
          badge.unlocked ? "text-muted-foreground" : "text-muted-foreground/40"
        )}
      >
        {badge.description}
      </p>
      {!badge.unlocked && (
        <span className="mt-2 px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
          未解锁 Locked
        </span>
      )}
    </div>
  )
}

export function BadgePanel() {
  const unlockedCount = badges.filter((b) => b.unlocked).length

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground">
          我的徽章
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            My Badges
          </span>
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          已解锁 {unlockedCount}/{badges.length} · Unlocked
        </p>
      </div>

      {/* Badge Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border bg-muted/30">
        <p className="text-xs text-muted-foreground text-center">
          完成更多任务解锁徽章
          <br />
          <span className="text-xs">Complete more tasks to unlock badges</span>
        </p>
      </div>
    </div>
  )
}
