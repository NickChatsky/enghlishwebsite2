export function VideoGallery() {
  // Replace these with your actual YouTube video IDs
  const videos = [
    {
      id: "19g66ezsKAg", // Replace with your first YouTube video ID
      title: "English Pronunciation Tips for Beginners",
    },
    {
      id: "19g66ezsKAg", // Replace with your second YouTube video ID
      title: "French Conversation Practice: Everyday Phrases",
    },
    {
      id: "19g66ezsKAg", // Replace with your third YouTube video ID
      title: "Common English Grammar Mistakes to Avoid",
    },
    {
      id: "19g66ezsKAg", // Replace with your fourth YouTube video ID
      title: "French Culture: Essential Expressions for Travelers",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Teaching Resources</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These videos showcase my teaching style and methodology. I create these resources to help my students
              practice between our sessions.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl pt-12">
          <p className="text-center mb-8 text-gray-600 italic">
            Each video represents my unique approach to language instruction, focusing on practical skills and cultural
            context.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <div className="aspect-video overflow-hidden rounded-lg shadow-sm">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
                <h3 className="text-lg font-medium text-center">{video.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-600 font-medium">
              These videos demonstrate my personalized teaching methods that I bring to every class.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
