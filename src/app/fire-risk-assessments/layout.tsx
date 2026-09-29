import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Risk Assessments | PAS 79 Compliant",
  description: "Professional, PAS 79 compliant Fire Risk Assessments for commercial, industrial, and residential premises across the UK.",
};

export default function FRALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
