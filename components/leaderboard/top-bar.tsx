"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const rbuOptions = [
  { value: "all", label: "全部部门", labelEn: "All RBUs" },
  { value: "sales", label: "销售部", labelEn: "Sales" },
  { value: "tech", label: "技术部", labelEn: "Tech" },
  { value: "marketing", label: "市场部", labelEn: "Marketing" },
  { value: "hr", label: "人力资源", labelEn: "HR" },
]

const dimensions = [
  { value: "total", label: "总积分", labelEn: "Total" },
  { value: "monthly", label: "月度积分", labelEn: "Monthly" },
  { value: "quarterly", label: "季度积分", labelEn: "Quarterly" },
]

interface TopBarProps {
  selectedRbu: string
  onRbuChange: (value: string) => void
  selectedDimension: string
  onDimensionChange: (value: string) => void
}

export function TopBar({
  selectedRbu,
  onRbuChange,
  selectedDimension,
  onDimensionChange,
}: TopBarProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        {/* RBU Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">部门 RBU:</span>
          <Select value={selectedRbu} onValueChange={onRbuChange}>
            <SelectTrigger className="w-[160px] bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {rbuOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <span>{option.label}</span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {option.labelEn}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dimension Tabs */}
        <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
          {dimensions.map((dim) => (
            <button
              key={dim.value}
              onClick={() => onDimensionChange(dim.value)}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                selectedDimension === dim.value
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span>{dim.label}</span>
              <span className="ml-1 text-xs opacity-70">{dim.labelEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-foreground">
          积分排行榜
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            Points Leaderboard
          </span>
        </h1>
      </div>
    </header>
  )
}
