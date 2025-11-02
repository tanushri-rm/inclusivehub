import MarketplaceCard from '../MarketplaceCard'

export default function MarketplaceCardExample() {
  return (
    <div className="max-w-sm p-4">
      <MarketplaceCard
        title="Abstract Sunset Painting"
        creator="Sarah Chen"
        price={45}
        imageUrl="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
        tags={["Art", "Painting", "Abstract"]}
        description="A vibrant abstract interpretation of coastal sunsets"
      />
    </div>
  )
}
