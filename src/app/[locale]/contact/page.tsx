// app/[locale]/contact/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { locales } from '@/lib/locales';
import ContactForm from '@/components/sections/ContactForm';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale, 'contact-page');
  return {
    title: dict.contact_us + ' | Sayes Performance' || 'Contact Us | Sayes Performance',
    description: dict.get_in_touch_description || 'Get in touch with Sayes Performance for coaching and training inquiries.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale, 'contact-page');

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-start md:pt-20 pt-24 py-8 px-2 md:px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <ContactForm dict={dict} />
      </div>
    </div>
  );
}