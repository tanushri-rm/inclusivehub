import EducationModule from '../EducationModule'

export default function EducationModuleExample() {
  return (
    <div className="max-w-md p-4">
      <EducationModule
        title="Understanding Digital Accessibility"
        description="Learn the fundamentals of web accessibility and how to make digital content inclusive for all users."
        duration="45 min"
        difficulty="Beginner"
        topics={["WCAG Guidelines", "Screen Readers", "Keyboard Navigation", "Color Contrast"]}
      />
    </div>
  )
}
