import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
});

function ContactsPage() {
  return <div className="pt-24 px-6">Контакты в разработке</div>;
}
