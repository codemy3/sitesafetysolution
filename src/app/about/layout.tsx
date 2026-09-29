import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Site Safety Solutions, our experienced team, and our commitment to practical, proportionate health and safety compliance in the UK.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
