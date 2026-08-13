import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/objects/")({
  component: ObjectsPage,
});

function ObjectsPage() {
  return <div className="pt-24 px-6">Страница "Объекты" в разработке</div>;
}
