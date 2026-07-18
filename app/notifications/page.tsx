import Navbar from "@/components/Navbar";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#0f0c08] text-[#d4b483]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-6xl font-serif tracking-[0.15em] mb-8">
          Notifications
        </h1>

        <div className="w-48 h-px bg-[#8b6b3f] mb-10"></div>

        <div className="border border-[#8b6b3f] bg-[#17120d] rounded-xl p-8">
          <p className="text-xl text-center">
            No notifications yet.
          </p>

          <p className="text-center text-[#b99760] mt-4 italic">
            Updates, announcements, and community news will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}