import { createFileRoute } from "@tanstack/react-router";
import { Map } from "@/components/ui/map";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <h1 className="font-bold text-7xl text-red-500">열린 우주 방산 지도</h1>

      <div className="h-[420px] w-full">
        <Map center={[-74.006, 40.7128]} zoom={12} />
      </div>
    </main>
  );
}
