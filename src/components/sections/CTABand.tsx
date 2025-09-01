import Link from 'next/link';
import { LinkButton } from '@/components/ui/LinkButton';

interface CTABandProps {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function CTABand({
  title = 'Ready to get clear guidance?',
  subtitle = 'Book your $500 virtual consultation or learn how it works.',
  primaryHref = '/book/',
  secondaryHref = '/how-it-works/',
}: CTABandProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-navy text-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{title}</h2>
            <p className="text-white/90">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <LinkButton href={primaryHref} variant="primary" size="lg" eventName="cta_band_click" eventParams={{ action: 'book' }}>
              Book Consultation
            </LinkButton>
            <Link href={secondaryHref} className="text-white/90 underline underline-offset-4 hover:text-white">
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

