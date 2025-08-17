import { ToggleSwitchGroup } from "@/components/toggle-switch";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-indigo-500/40 to-purple-600/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/25 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen py-8">
        <div className="flex items-center justify-center max-w-6xl mx-auto">
          <ToggleSwitchGroup />
        </div>
      </div>
    </main>
  );
}
