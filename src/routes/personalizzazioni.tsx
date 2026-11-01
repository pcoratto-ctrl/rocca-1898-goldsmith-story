import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL: permanently points to the Laboratorio & Su misura page.
export const Route = createFileRoute("/personalizzazioni")({
  beforeLoad: () => {
    throw redirect({ to: "/laboratorio-su-misura", statusCode: 301 });
  },
});
