import AIChat from '../AIChat'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function AIChatExample() {
  const [showChat, setShowChat] = useState(true)

  return (
    <div className="h-screen w-full relative">
      {!showChat && (
        <div className="flex items-center justify-center h-full">
          <Button onClick={() => setShowChat(true)}>
            Open Chat
          </Button>
        </div>
      )}
      {showChat && <AIChat onClose={() => setShowChat(false)} />}
    </div>
  )
}
