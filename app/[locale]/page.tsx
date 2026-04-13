import LandingNavbar from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero";
import SocialProof from "@/components/landing/social-proof";
import FeaturesSection from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import TemplatesSection from "@/components/landing/templates";
import CTALanding from "@/components/landing/cta";
import LandingFooter from "@/components/landing/footer";

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    absolute: "Form Builder with Logic and Analytics | FormFlow",
  },
  description:
    "Create conversational forms with conditional logic, share them in minutes, and track responses with real-time analytics.",
  openGraph: {
    title: "Form Builder with Logic and Analytics | FormFlow",
    description:
      "Create conversational forms with conditional logic, share them in minutes, and track responses with real-time analytics.",
  },
  twitter: {
    title: "Form Builder with Logic and Analytics | FormFlow",
    description:
      "Create conversational forms with conditional logic, share them in minutes, and track responses with real-time analytics.",
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-primary">
      <LandingNavbar />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <HowItWorks />
        <TemplatesSection />
        <CTALanding />
      </main>
      <LandingFooter />
    </div>
  );
}
