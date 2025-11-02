import FeatureCard from '../FeatureCard'
import { Mic } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="max-w-sm p-4">
      <FeatureCard
        icon={Mic}
        title="Voice Commands"
        description="Navigate the platform hands-free using natural voice commands powered by Gemini AI"
      />
    </div>
  )
}
