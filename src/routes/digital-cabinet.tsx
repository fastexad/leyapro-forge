import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/digital-cabinet")({
  component: DigitalCabinetPage,
});

function DigitalCabinetPage() {
  return <div className="pt-24 px-6">Цифровой кабинет в разработке</div>;
}
