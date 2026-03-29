"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Trophy,
  Medal,
  Users,
  Settings,
  HelpCircle,
  Heart,
} from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "概览", labelEn: "Overview", active: false },
  { icon: Trophy, label: "排行榜", labelEn: "Leaderboard", active: false },
  { icon: Heart, label: "发起认可", labelEn: "Recognition", active: true },
  { icon: Medal, label: "徽章", labelEn: "Badges", active: false },
  { icon: Users, label: "团队", labelEn: "Team", active: false },
  { icon: Settings, label: "设置", labelEn: "Settings", active: false },
  { icon: HelpCircle, label: "帮助", labelEn: "Help", active: false },
]

export function RecognitionSidebar() {
  return (
    <aside className="w-[180px] h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Trophy className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">积分系统</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs opacity-70">{item.labelEn}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          <p>版本 v1.0.0</p>
          <p className="mt-1">Version</p>
        </div>
      </div>
    </aside>
  )
}
