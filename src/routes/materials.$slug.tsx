import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/materials/$slug")({
  component: MaterialDetailsPage,
});

function MaterialDetailsPage() {
  return <div className="pt-24 px-6">Детали материала в разработке</div>;
}
