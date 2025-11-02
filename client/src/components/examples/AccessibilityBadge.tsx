import AccessibilityBadge from '../AccessibilityBadge'

export default function AccessibilityBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <AccessibilityBadge type="wheelchair" />
      <AccessibilityBadge type="audio" />
      <AccessibilityBadge type="visual" />
      <AccessibilityBadge type="hearing" />
    </div>
  )
}
