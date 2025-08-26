// app/[locale]/terms/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { locales } from '@/lib/locales';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Terms({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale, 'terms');

  return (
    <>
      <main id="content" className="site-main max-w-5xl post-1060 page type-page status-publish hentry px-4 py-10 mx-auto">
        
        <div className="page-content">
          <h1 className="wp-block-heading has-black-color has-text-color font-inter text-xl sm:text-3xl py-8">{dict.membership_terms}</h1>
          
          <p className="has-black-color has-text-color">§ 1. Membership&nbsp;</p>
          
          <p className="has-black-color has-text-color">
            Membership in Sayes Performance Center is personal. The minimum age to sign a membership agreement via direct debit is 18 years. For trainees under the age of 18, a guardian is required to sign a membership agreement on their behalf. For younger people, the following applies;<br />
            11-12 years<br />
            From the age of 11, you are welcome to sign up for membership with us. This takes place together with a guardian who is responsible for them following Sayes Performance Center guidelines. All training takes place in the company of a guardian, who has his own membership with us, where the guardian is responsible for the training being done safely. We recommend that the young person books a gym introduction session with any of our coaches to minimize the risk of injury and train in a safe way. Should any of the above points not be followed/abused, Sayes Performance Center guidelines has the right to terminate the young person's subscription with immediate effect.<br /><br />
            13-15 years<br />
            From the age of 13, you are welcome to visit our gyms unaccompanied by a guardian. It is the guardian's responsibility to ensure that the young person knows about and follows the Sayes Performance Center guidelines. We recommend that the young person book a gym introduction session with us to minimize the risk of injury and train in a safe way. Should any of the above points not be followed/abused, Sayes Performance Center has the right to terminate the young person's subscription with immediate effect.
          </p>
          
          <p className="has-black-color has-text-color">
            Infants<br />
            You who wish to visit our facilities in the company of an infant may visit us during the day, until 3:00 p.m. The child must always sit/lie in their pram or baby seat, this is for the child's safety. The guardian has full responsibility for the child during the stay at Sayes Performance Center . Local deviations may occur.
          </p>
          
          <p className="has-black-color has-text-color">
            Sayes Performance Center members must always register by signing in using their membership key card. Members are obliged to always carry their membership key card with them during their stay at Sayes Performance Center, even during training, so that this can be shown during any checks. If you do not bring your membership key card, in...
          </p>
          
          {/* Add the rest of the truncated content here */}
          
          <p className="has-black-color has-text-color">
            <br />§ 11. Call out costs&nbsp;
          </p>
          
          <p className="has-black-color has-text-color">
            The member undertakes through his membership to leave the premises at the time specified as closing time. In the event of a stay in an unmanned premises after closing time, the member will be charged for the call-out cost.<br /><br />
          </p>
          
          <p className="has-black-color has-text-color">
            § 12. Identification
          </p>
          
          <p className="has-black-color has-text-color">
            The direct debit agreement requires a Swedish social security number, a Swedish account number and a valid Swedish ID card. For any discounts, a certificate is required that confirms that the member is entitled to Sayes Performance discounts. The discount only applies when signing a key card and against regular prices.<br />
          </p>
          
          <p className="has-black-color has-text-color">
            § 13. Right of withdrawal when buying on the internet
          </p>
          
          <p className="has-black-color has-text-color">
            According to the Distance Contracts Act, you as a private person have the right to cancel your purchase within 14 days of receipt. If you regret your purchase, please contact our customer service, either during telephone hours, visit Sayes Performance Center. The Swedish Consumer Agency has produced a cancellation form that can be found on their website www.konsumentverket.se which you can use if you wish. In the event of a complaint, please contact our customer service, either during telephone hours, via email or visit Sayes Performance Center. Reimbursement is made without delay and no later than 14 days after the consumer's notification that the contract has been withdrawn.
          </p>
          
          <p className="has-black-color has-text-color">
            § 14. Complaints
          </p>
          
          <p className="has-black-color has-text-color">
            In cases where our service does not correspond to the content of the agreement, the customer has the right to complain up to 6 months from purchase. Complaints can, for example, be made in cases where our service has been affected by major location changes or relocation, significant changes in the range of activities and equipment assortment or in the event of possible errors and deficiencies that do not correspond to what was promised in the agreement. If the buyer does not complain within 6 months of receiving the service, the right to invoke the error is lost. Law (2005:62).
          </p>
        </div>
      </main>
    </>
  );
}