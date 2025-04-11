import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to start your language learning journey? Contact me to schedule a free consultation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <Mail className="h-10 w-10 text-blue-500" />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-500">contact@yourdomain.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <Phone className="h-10 w-10 text-blue-500" />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm">
            <MapPin className="h-10 w-10 text-blue-500" />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-gray-500">Virtual lessons worldwide</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScxBc6rH5yWLU6uhctVcqLB-xCNWY8Cx7oURB99eusbtFjVtw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-500 hover:bg-blue-600">Schedule a class with me</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
