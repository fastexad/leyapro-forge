import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/materials/")({
  component: MaterialsPage,
});

function MaterialsPage() {
  return <div className="pt-24 px-6">Страница "Материалы" в разработке</div>;
}
