import MapView from '../MapView'

export default function MapViewExample() {
  const sampleLocations = [
    { id: '1', name: 'City Hospital', lat: 37.7749, lng: -122.4194, type: 'hospital' },
    { id: '2', name: 'Harmony Cafe', lat: 37.7849, lng: -122.4094, type: 'restaurant' },
    { id: '3', name: 'Metro Mall', lat: 37.7649, lng: -122.4294, type: 'mall' },
  ]

  return (
    <div className="p-4">
      <MapView
        locations={sampleLocations}
        center={{ lat: 37.7749, lng: -122.4194 }}
        onLocationClick={(loc) => console.log('Clicked:', loc.name)}
      />
    </div>
  )
}
