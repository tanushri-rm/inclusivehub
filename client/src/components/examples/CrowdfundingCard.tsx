import CrowdfundingCard from '../CrowdfundingCard'

export default function CrowdfundingCardExample() {
  return (
    <div className="max-w-sm p-4">
      <CrowdfundingCard
        title="Accessible Playground Equipment"
        organizer="Community First Initiative"
        description="Help us build an inclusive playground with wheelchair-accessible swings, sensory play areas, and adaptive equipment for all children"
        goal={25000}
        raised={18500}
        backers={234}
        daysLeft={15}
        category="Community"
        imageUrl="https://images.unsplash.com/photo-1586105449897-20b5efeb3229?w=400&h=300&fit=crop"
      />
    </div>
  )
}
