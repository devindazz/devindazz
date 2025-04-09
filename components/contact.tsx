
import SocialLinks from "@/components/ui/social-links"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative p-4 md:p-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/day-background.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Content Container */}
      <div className="container max-w-6xl mx-auto z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text */}
        <div className="text-white space-y-6 backdrop-blur-sm bg-black/30 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg opacity-90">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or
            just want to say hello!
          </p>
          <SocialLinks />
        </div>

       
      </div>
    </main>
  )
}

