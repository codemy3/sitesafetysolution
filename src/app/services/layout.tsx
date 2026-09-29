import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Health & Safety Consultancy",
  description: "Explore our 10 core health and safety services, including Fire Risk Assessments, RAMS, CDM Support, Risk Assessments, and Site Inspections.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
