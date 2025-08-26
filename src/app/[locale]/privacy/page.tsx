// app/[locale]/privacy/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { locales } from '@/lib/locales';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale, 'privacy');

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{dict.privacy_policy}</h1>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p><strong>Sayes Performance Privacy Policy</strong></p>
        <p>Effective as of August 25, 2025.</p>
        <p>As a member of one of Sayes Performance Center and to provide you with the services you receive from us, we need to process your personal data. This privacy policy contains information about our processing of your personal data and your rights in relation to our processing.</p>
        
        <ol className="list-decimal pl-6 my-4">
          <li><strong> What personal data do we handle?</strong></li>
        </ol>
        
        <p>We collect the following information from you:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Address</li>
          <li>Social security number</li>
          <li>Telephone number</li>
          <li>Email address</li>
          <li>Photo</li>
          <li>IP address (when using my pages)</li>
          <li>Login details (when you use my pages)</li>
          <li>Payment information (such as card number or bank account for payment via direct debit)</li>
          <li>Information about your entry and exit at our facilities</li>
        </ul>
        
        <p>In addition to the above, we may also collect other information that you provide from time to time for special services, such as, Sports massage treatments, Personal coaching sessions,Group sessions, interest registrations for various events, when you purchase from our website etc. These are either voluntary or necessary for the services for which they are required. You will be told what that information is used for when you provide it.</p>
        
        <p>At our fitness centers, camera surveillance at the entrance or inside the gym area takes place in accordance with current legislation, which means that you as a member may be recorded on surveillance footage.</p>
        
        <ol  className="list-decimal pl-6 my-4">
          <li><strong> What is the data used for?</strong></li>
        </ol>
        
        <p>We only process your data for the purposes stated in this Privacy Policy. In most cases, we need the data to be able to provide the services you requested. In some cases we also want to provide other services and then we ask you for your consent for these services. This section contains information about what we use your personal data for and which legal basis we have for each case.</p>
        
        <p><strong>Management of your membership agreement</strong></p>
        <p>We process your data in order to be able to fulfill your membership agreement and safeguard the rights and fulfill the obli...</p>
        
        {/* Add the rest of the truncated content here */}
        
        <p>Sayes Performance AB</p>
        <p>Organization number: 559450-7054</p>
        <p>Telephone number: 072 333 8787</p>
        <p>Postal address: Dag Hammarskjölds Torg 2, 211 18 Malmö</p>
        <p>Label the envelope "Register extract". The register extract is only sent to your civil registration address.</p>
        
        <p><strong>Right to rectification</strong></p>
        <p>If you notice that we have incorrect information about you, you have the right to request that we correct such information. You also have the right to supplement with such personal data that you consider to be missing and that are relevant with regard to the purpose we have for the processing of your personal data. In most cases, you can correct incorrect information yourself via My Pages. If this is not possible, you must be able to identify yourself with an ID document approved in Sweden when contacting us.</p>
        
        <p><strong>Right to erasure</strong></p>
        <p>We save your customer data in accordance with what appears above. However, you always have the right to contact us and ask for your personal data to be deleted. We will then delete them to the extent that follows from the applicable law or regulation.</p>
        
        <p><strong>Right to limitation of treatment</strong></p>
        <p>The right to restriction applies, among other things, if you believe that the personal data is incorrect and have requested correction. In such cases, you can also request that our processing of your personal data be limited while the accuracy of the personal data is investigated.</p>
        
        <p><strong>Right to object</strong></p>
        <p>You have the right to object to the processing of your personal data that we do based on balancing of interests. In that case, you need to specify which treatment you object to. In the event of such an objection, we may only continue processing if we can demonstrate that there are compelling, justifiable reasons why the personal data must be processed that outweigh your interests.</p>
        
        <p><strong>Complaint</strong></p>
        <p>If you believe that we are processing your personal data in violation of applicable data protection regulations, you should report this to us as soon as possible. Our contact details appear below.You also always have the right to contact the Swedish Privacy Protection Authority (IMY) if you have any comments about our processing of your personal data.</p>
        
        <p><strong>Contact details</strong></p>
        <p>If you have questions or comments, you are always welcome to contact us.</p>
        
        <p><strong>Personal data controller: Svenska N'ergy AB</strong></p>
        <p><strong>Swedish N'ergy AB (org. no. 556591-8868)</strong></p>
        <p><strong>Box 605</strong></p>
        <p><strong>442 40 Kungälv</strong></p>
        <p><strong>Phone: 010-8885698</strong></p>
      </div>
    </main>
  );
}