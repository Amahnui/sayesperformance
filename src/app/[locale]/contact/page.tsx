// app/[locale]/contact/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { locales } from '@/lib/locales';
import ContactForm from '@/components/sections/ContactForm';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale, 'contact');
  return {
    title: dict.title || 'Contact Us | Sayes Performance',
    description: dict.get_in_touch_description || 'Get in touch with Sayes Performance for coaching and training inquiries.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale, 'contact');

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#120088] mb-8 font-inter">
          {dict.title || 'Contact Us'}
        </h1>
        <ContactForm dict={dict} />
      </div>
    </div>
  );
}