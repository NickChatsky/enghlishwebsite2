import { BookOpen, MessageCircle, Award, Calendar } from "lucide-react"

export function TeachingServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Teaching Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tailored language instruction to meet your specific goals and learning style.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-12">
          <div className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <BookOpen className="h-10 w-10 text-blue-500" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Private Lessons</h3>
              <p className="text-gray-500">
                One-on-one instruction tailored to your specific language goals, learning pace, and interests.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <MessageCircle className="h-10 w-10 text-blue-500" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Conversation Practice</h3>
              <p className="text-gray-500">
                Focused sessions to improve your speaking confidence and fluency in real-world situations.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <Award className="h-10 w-10 text-blue-500" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Exam Preparation</h3>
              <p className="text-gray-500">
                Specialized coaching for DELF, DALF, TOEFL, IELTS, and other language proficiency exams.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <Calendar className="h-10 w-10 text-blue-500" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Group Workshops</h3>
              <p className="text-gray-500">
                Interactive small group sessions focused on specific language skills or cultural topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
