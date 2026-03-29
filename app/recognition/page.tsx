import { RecognitionSidebar } from "@/components/recognition/sidebar"
import { RecognitionForm } from "@/components/recognition/recognition-form"

export const metadata = {
  title: "发起认可 | Send Recognition",
  description: "向同事发送认可和表彰",
}

export default function RecognitionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <RecognitionSidebar />

      {/* Main Content Area */}
      <div className="ml-[180px]">
        <RecognitionForm />
      </div>
    </div>
  )
}
