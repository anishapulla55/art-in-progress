import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0c08] text-[#d4b483]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-6xl font-serif tracking-[0.15em] mb-8">
          About Art in Progress
        </h1>

        <div className="w-48 h-px bg-[#8b6b3f] mb-10"></div>

        <div className="space-y-6 text-lg leading-relaxed">
            <p>
                Art in Progress is a platform dedicated to supporting
                the next generation of artists. Our mission is to
                inspire creativity and growth by providing a community
                where artists can share their work, receive meaningful
                feedback, discover opportunities, and connect with
                others who are passionate about the creative process.
            </p>

            <p>
                Founded by Virginia Tech students Anisha Pulla and
                Divya Angelina, Art in Progress began with a simple
                idea: artists deserve a space that celebrates progress,
                not just perfection.
            </p>

            <p>
                We are incredibly grateful to everyone who has
                supported us throughout the development of this
                platform. Your feedback, encouragement, and creativity
                continue to shape what Art in Progress becomes.
            </p>

            <p>
                This is only the beginning! We have exciting features,
                events, and opportunities planned for the future, and
                we look forward to building them alongside our
                community.
            </p>

            <p className="italic text-[#c9a56a]">
                Thank you for being part of the journey.
            </p>

            <p className="font-serif text-xl">
                — The Art in Progress Team
            </p>
        </div>
      </div>
    </div>
  );
}