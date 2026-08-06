import { CTA } from "../../components/layout/CTA";
import { Features } from "../../components/layout/Features";
import { Hero } from "../../components/layout/Hero";
import { HowItWorks } from "../../components/layout/HowItWorks";
import { LiveDetectionDemo } from "../../components/layout/LiveDetectionDemo";
import { Stats } from "../../components/layout/Stats";
import { Technology } from "../../components/layout/Technology";

export function LandingPage() {
  return (
    <>
      <Hero />
      <LiveDetectionDemo />
      <Stats />
      <Features />
      <HowItWorks />
      <Technology />
      <CTA />
    </>
  );
}
