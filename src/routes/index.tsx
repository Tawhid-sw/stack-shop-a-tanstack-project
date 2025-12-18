import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });
function App() {
  const handleIncrement = () => {};
  return (
    <div className="flex items-center justify-center w-full min-h-screen text-xl font-semibold flex-col gap-8">
      <p></p>
      <Button onClick={handleIncrement} className="cursor-pointer">
        increment
      </Button>
    </div>
  );
}
