import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technologies")({
  component: TechnologiesPage,
});

function TechnologiesPage() {
  return <div className="pt-24 px-6">Технологии в разработке</div>;
}
