import Image from "next/image"

export function TeacherHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-b border-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              English & French Language Teacher
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Helping students master languages through personalized instruction and engaging content.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-blue-100 shadow-lg">
              {/* Replace the src attribute with your actual photo URL */}
              <Image
                src="/your-photo.jpg"
                width={160}
                height={160}
                alt="Teacher's photo"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full max-w-md space-y-2">
            <p className="text-lg font-medium">Hello! I'm [Your Name]</p>
            <p className="text-gray-500">
              With over [X] years of experience teaching English and French, I specialize in conversational fluency,
              exam preparation, and cultural immersion techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
