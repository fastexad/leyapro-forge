import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/objects/$slug")({
  component: ObjectDetailsPage,
});

function ObjectDetailsPage() {
  return <div className="pt-24 px-6">Детали объекта в разработке</div>;
}
