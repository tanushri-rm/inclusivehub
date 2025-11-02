import NGOCard from '../NGOCard'

export default function NGOCardExample() {
  return (
    <div className="max-w-md p-4">
      <NGOCard
        name="Access Alliance"
        description="Dedicated to creating accessible infrastructure and advocating for disability rights worldwide"
        focus={["Infrastructure", "Advocacy", "Education"]}
        website="https://example.org"
        membersSupported={15000}
      />
    </div>
  )
}
