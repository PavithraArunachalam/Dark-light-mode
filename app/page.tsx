import ThemeToggle from "@/components/theme-toggle";
import AnimatedCard from "@/components/animated-card";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          FocusHub Dashboard
        </h1>
        <ThemeToggle />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatedCard>📋 Tasks</AnimatedCard>
        <AnimatedCard>⏱️ Focus Timer</AnimatedCard>
        <AnimatedCard>📊 Analytics</AnimatedCard>
      </div>

    </main>
  );
}
