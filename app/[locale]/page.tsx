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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
    description: t('description')
  };
}

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
