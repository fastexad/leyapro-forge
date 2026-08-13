import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bridges")({
  component: BridgesPage,
});

function BridgesPage() {
  return <div className="pt-24 px-6">Страница "Мосты" в разработке</div>;
}
