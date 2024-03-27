import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";

const termsAndConditionsData = [
  {
    title: "Links to other resources",
    description:
      "Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. Some of the links on the Website may be &quot;affiliate links&quot;. This means if you click on the link and purchase an item, the Operator will receive an affiliate commission. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website and Services. Your linking to any other off-site resources is at your own risk.",
  },
  {
    title: "Prohibited uses",
    description:
      "In addition to other terms as set forth in the Agreement, you are prohibited from using the Website and Services or Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Website and Services, third party products and services, or the Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the Website and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Website and Services for violating any of the prohibited uses.",
  },
  {
    title: "Intellectual property rights",
    description:
      "&quot;Intellectual Property Rights&quot; means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by the Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with the Operator. All trademarks, service marks, graphics and logos used in connection with the Website and Services, are trademarks or registered trademarks of the Operator or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Website and Services may be the trademarks of other third parties. Your use of the Website and Services grants you no right or license to reproduce or otherwise use any of the Operator or third party trademarks.",
  },
  {
    title: "Limitation of liability",
    description:
      "To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of the Operator and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to the Operator for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.",
  },
  {
    title: "Indemnification",
    description:
      "You agree to indemnify and hold the Operator and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website and Services or any willful misconduct on your part.",
  },
  {
    title: "Severability",
    description:
      "All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.",
  },
  {
    title: "Dispute resolution",
    description:
      "The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Maharashtra, India without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of India. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Maharashtra, India, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.",
  },
  {
    title: "Changes and amendments",
    description:
      "We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website and Services after any such changes shall constitute your consent to such changes. Policy was created with Website Policies.",
  },
  {
    title: "Acceptance of these terms",
    description:
      "You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services.",
  },
  {
    title: "gsrdtgd",
    description: "gdgrdvfgd",
  },
];

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-[#eff8ff] via-[#8ec442] to-[#52813d]">
      <div className="hidden sm:flex w-full">
        <Navbar page="" />
      </div>
      <div className="sm:hidden flex">
        <MobileNavbar page="" />
      </div>
      <div className="mx-[5vw] py-24 sm:py-14">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          These terms and conditions (&quot;Agreement&quot;) sets forth the
          general terms and conditions of your use of the{" "}
          <a
            href="https://www.horizonwingsoverseaseducation.com/"
            className="text-blue-600"
          >
            horizonwingsoverseaseducation.com
          </a>{" "}
          website (&quot;Website&quot; or &quot;Service&quot;) and any of its
          related products and services (collectively, &quot;Services&quot;).
          This Agreement is legally binding between you (&quot;User&quot;,
          &quot;you&quot; or &quot;your&quot;) and this Website operator
          (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or
          &quot;our&quot;). By accessing and using the Website and Services, you
          acknowledge that you have read, understood, and agree to be bound by
          the terms of this Agreement. If you are entering into this Agreement
          on behalf of a business or other legal entity, you represent that you
          have the authority to bind such entity to this Agreement, in which
          case the terms &quot;User&quot;, &quot;you&quot; or &quot;your&quot;
          shall refer to such entity. If you do not have such authority, or if
          you do not agree with the terms of this Agreement, you must not accept
          this Agreement and may not access and use the Website and Services.
          You acknowledge that this Agreement is a contract between you and the
          Operator, even though it is electronic and is not physically signed by
          you, and it governs your use of the Website and Services. This
          document is published in accordance with the provisions of Rule 3(1)
          of the Information Technology (Intermediary Services) Rules, 2011.
        </p>
        {termsAndConditionsData.map(({ title, description }, index) => {
          return (
            <>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="mb-6">{description}</p>
            </>
          );
        })}

        <h2 className="text-2xl font-bold mb-2">Contacting us</h2>
        <p>
          If you would like to contact us to understand more about this
          Agreement or wish to contact us concerning any matter relating to it,
          you may send an email to{" "}
          <a
            href="mailto:info.horizonwings@gmail.com"
            className="text-blue-200"
          >
            info.horizonwings@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer page="" />
    </div>
  );
};

export default Page;
