import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
});

function CompanyPage() {
  return <div className="pt-24 px-6">О компании в разработке</div>;
}
