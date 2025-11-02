import DirectoryCard from '../DirectoryCard'

export default function DirectoryCardExample() {
  return (
    <div className="max-w-md p-4">
      <DirectoryCard
        name="City General Hospital"
        type="Hospital"
        address="123 Healthcare Ave, Medical District"
        distance="1.2 mi"
        phone="(555) 123-4567"
        features={["wheelchair", "audio", "visual"]}
      />
    </div>
  )
}
