"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import {
  Users,
  Heart,
  MessageSquare,
  AtSign,
  Check,
  X,
  AlertCircle,
  Info,
} from "lucide-react"

// Mock employee data
const employees = [
  { id: "1", name: "张三", nameEn: "Zhang San", department: "技术部", avatar: "Z" },
  { id: "2", name: "李四", nameEn: "Li Si", department: "产品部", avatar: "L" },
  { id: "3", name: "王五", nameEn: "Wang Wu", department: "设计部", avatar: "W" },
  { id: "4", name: "赵六", nameEn: "Zhao Liu", department: "市场部", avatar: "Z" },
  { id: "5", name: "钱七", nameEn: "Qian Qi", department: "运营部", avatar: "Q" },
  { id: "6", name: "孙八", nameEn: "Sun Ba", department: "财务部", avatar: "S" },
]

// Company values
const values = [
  { id: "innovation", label: "创新 Innovation", icon: "💡", color: "#3B82F6" },
  { id: "teamwork", label: "协作 Teamwork", icon: "🤝", color: "#10B981" },
  { id: "integrity", label: "诚信 Integrity", icon: "🎯", color: "#8B5CF6" },
  { id: "excellence", label: "卓越 Excellence", icon: "⭐", color: "#F59E0B" },
  { id: "customer", label: "客户至上 Customer First", icon: "❤️", color: "#EF4444" },
]

interface FormErrors {
  recipients?: string
  value?: string
  reason?: string
}

export function RecognitionForm() {
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [reason, setReason] = useState("")
  const [ccRecipients, setCcRecipients] = useState<string[]>([])
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Daily limits mock data
  const dailyStats = {
    totalUsed: 7,
    totalLimit: 10,
    perPersonUsed: { "1": 2, "2": 1 },
    perPersonLimit: 3,
  }

  // Real-time validation
  const errors = useMemo<FormErrors>(() => {
    const errs: FormErrors = {}
    if (touched.recipients && selectedRecipients.length === 0) {
      errs.recipients = "请选择至少一位同事"
    }
    if (touched.value && !selectedValue) {
      errs.value = "请选择一项价值观"
    }
    if (touched.reason && reason.trim().length === 0) {
      errs.reason = "请输入认可原因"
    } else if (touched.reason && reason.trim().length < 20) {
      errs.reason = "建议至少输入20个字符以更好地表达认可"
    }
    return errs
  }, [selectedRecipients, selectedValue, reason, touched])

  const isValid = selectedRecipients.length > 0 && selectedValue && reason.trim().length >= 20

  const toggleRecipient = (id: string) => {
    setTouched((prev) => ({ ...prev, recipients: true }))
    setSelectedRecipients((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const toggleCc = (id: string) => {
    setCcRecipients((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const handleSubmit = async () => {
    setTouched({ recipients: true, value: true, reason: true })
    if (!isValid) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // Reset form
    setSelectedRecipients([])
    setSelectedValue(null)
    setReason("")
    setCcRecipients([])
    setTouched({})
    alert("认可已成功提交！")
  }

  const remainingToday = dailyStats.totalLimit - dailyStats.totalUsed

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 bg-card border-b border-border flex items-center px-6 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">发起认可</h1>
            <p className="text-xs text-muted-foreground">Send Recognition</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-8 px-4">
        <div className="w-full max-w-[560px]">
          {/* Daily Limit Alert */}
          <Alert className="mb-6 border-primary/20 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              <span className="font-medium">每日限额提示：</span>
              今日已发起 {dailyStats.totalUsed}/{dailyStats.totalLimit} 次认可，
              同一人每日最多认可 {dailyStats.perPersonLimit} 次。
              <span className="text-primary font-medium ml-1">剩余 {remainingToday} 次</span>
            </AlertDescription>
          </Alert>

          <Card className="shadow-sm border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  1
                </span>
                选择同事
                <span className="text-xs text-muted-foreground font-normal ml-1">Select Colleagues</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field data-invalid={!!errors.recipients}>
                  <FieldLabel className="sr-only">被认可人</FieldLabel>
                  <FieldDescription className="mb-3">
                    选择你想要认可的同事（可多选）
                  </FieldDescription>
                  <div className="flex flex-wrap gap-2">
                    {employees.map((emp) => {
                      const isSelected = selectedRecipients.includes(emp.id)
                      const usedCount = dailyStats.perPersonUsed[emp.id as keyof typeof dailyStats.perPersonUsed] || 0
                      const isLimited = usedCount >= dailyStats.perPersonLimit
                      return (
                        <button
                          key={emp.id}
                          type="button"
                          disabled={isLimited && !isSelected}
                          onClick={() => toggleRecipient(emp.id)}
                          className={`
                            flex items-center gap-2 px-3 py-2 rounded-lg border transition-all
                            ${isSelected
                              ? "border-primary bg-primary/10 text-primary"
                              : isLimited
                                ? "border-border bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                                : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
                            }
                          `}
                        >
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}>
                            {emp.avatar}
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-medium">{emp.name}</div>
                            <div className="text-xs text-muted-foreground">{emp.department}</div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-primary ml-1" />}
                          {isLimited && !isSelected && (
                            <Badge variant="secondary" className="text-xs ml-1">已达上限</Badge>
                          )}
                        </button>
                      )
                    })}
                  </div>
                  {errors.recipients && <FieldError>{errors.recipients}</FieldError>}
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border mt-4">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  2
                </span>
                选择价值观
                <span className="text-xs text-muted-foreground font-normal ml-1">Select Value</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field data-invalid={!!errors.value}>
                  <FieldLabel className="sr-only">价值观</FieldLabel>
                  <FieldDescription className="mb-3">
                    选择与认可相关的公司价值观
                  </FieldDescription>
                  <div className="grid grid-cols-1 gap-2">
                    {values.map((val) => {
                      const isSelected = selectedValue === val.id
                      return (
                        <button
                          key={val.id}
                          type="button"
                          onClick={() => {
                            setTouched((prev) => ({ ...prev, value: true }))
                            setSelectedValue(val.id)
                          }}
                          className={`
                            flex items-center gap-3 px-4 py-3 rounded-lg border transition-all text-left
                            ${isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
                            }
                          `}
                        >
                          <span className="text-xl">{val.icon}</span>
                          <span className={`text-sm font-medium ${isSelected ? "text-primary" : "text-foreground"}`}>
                            {val.label}
                          </span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-primary ml-auto" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                  {errors.value && <FieldError>{errors.value}</FieldError>}
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border mt-4">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  3
                </span>
                认可原因
                <span className="text-xs text-muted-foreground font-normal ml-1">Recognition Reason</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field data-invalid={!!errors.reason}>
                  <FieldLabel className="sr-only">原因</FieldLabel>
                  <FieldDescription className="mb-3">
                    描述你认可的具体事迹或贡献（建议至少20字）
                  </FieldDescription>
                  <Textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, reason: true }))}
                    placeholder="请描述你认可此同事的具体原因..."
                    className="min-h-[120px] resize-none"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      {errors.reason ? (
                        <FieldError>{errors.reason}</FieldError>
                      ) : reason.length >= 20 ? (
                        <span className="text-sm text-green-600 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> 字数符合要求
                        </span>
                      ) : null}
                    </div>
                    <span className={`text-xs ${reason.length >= 20 ? "text-green-600" : "text-muted-foreground"}`}>
                      {reason.length}/20+
                    </span>
                  </div>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-border mt-4">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center">
                  4
                </span>
                抄送同事
                <Badge variant="secondary" className="text-xs ml-1">可选</Badge>
                <span className="text-xs text-muted-foreground font-normal ml-1">CC (Optional)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel className="sr-only">抄送</FieldLabel>
                  <FieldDescription className="mb-3">
                    选择需要抄送的同事（可选）
                  </FieldDescription>
                  <div className="flex flex-wrap gap-2">
                    {employees
                      .filter((emp) => !selectedRecipients.includes(emp.id))
                      .map((emp) => {
                        const isSelected = ccRecipients.includes(emp.id)
                        return (
                          <button
                            key={emp.id}
                            type="button"
                            onClick={() => toggleCc(emp.id)}
                            className={`
                              flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-all
                              ${isSelected
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-card hover:border-primary/50"
                              }
                            `}
                          >
                            <AtSign className="w-3.5 h-3.5" />
                            {emp.name}
                            {isSelected && <X className="w-3.5 h-3.5" />}
                          </button>
                        )
                      })}
                  </div>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>

          {/* Validation Summary */}
          {touched.recipients && touched.value && touched.reason && !isValid && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                请完成以下必填项：
                <ul className="list-disc list-inside mt-1 text-sm">
                  {errors.recipients && <li>{errors.recipients}</li>}
                  {errors.value && <li>{errors.value}</li>}
                  {errors.reason && <li>{errors.reason}</li>}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button - Fixed at bottom */}
          <div className="sticky bottom-0 bg-background py-4 mt-6 border-t border-border -mx-4 px-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {selectedRecipients.length > 0 && (
                  <span>
                    将向 <span className="font-medium text-foreground">{selectedRecipients.length}</span> 位同事发送认可
                  </span>
                )}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
                className="min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    提交中...
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 mr-2" />
                    提交认可
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
