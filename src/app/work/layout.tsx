import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description: "Read our case studies and client testimonials. See how our health and safety solutions improve compliance and reduce risks on real projects.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
