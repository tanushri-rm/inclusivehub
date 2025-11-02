import VoiceInputButton from '../VoiceInputButton'

export default function VoiceInputButtonExample() {
  return (
    <div className="p-8">
      <VoiceInputButton onVoiceInput={(text) => console.log('Voice input:', text)} />
    </div>
  )
}
