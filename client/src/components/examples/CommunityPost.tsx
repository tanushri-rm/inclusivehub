import CommunityPost from '../CommunityPost'

export default function CommunityPostExample() {
  return (
    <div className="max-w-2xl p-4">
      <CommunityPost
        author="Alex Rodriguez"
        timestamp="2 hours ago"
        content="Just visited the new accessible cafe downtown! Amazing voice-activated ordering system and braille menus. Highly recommend to everyone in the community! 🎉"
        likes={24}
        comments={5}
      />
    </div>
  )
}
