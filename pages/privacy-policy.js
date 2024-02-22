import Link from "next/link";

function privacyPolicy() {
  return (
    <>
      <div className="flex w-10/12 my-10 gap-3 flex-col mx-auto text-[15px]">
        <h1 className="font-bold text-center text-3xl font-poppins mb-2">
          Privacy Policy
        </h1>
        <p>
          <span className="text-blue-900 font-bold underline underline-offset-4">
            Nikhil Vishwakarma
          </span>
          &nbsp;("Developer") is committed to protecting the privacy of visitors
          to the{" "}
          <Link
            href={"https://nikhivishwa.me/"}
            target="_blank"
            className="text-blue-900 font-bold underline underline-offset-4"
          >
            nikhivishwa.me
          </Link>{" "}
          website ("Website"). This Privacy Policy outlines how personal
          information is collected, used, and disclosed by the Developer.
        </p>
        <ul className="flex flex-col gap-5">
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              1. Information Collection
            </h4>
            <ul className="flex flex-col gap-5 list-disc my-5 ml-10 font-poppins">
              <li>
                <p>
                  <span className="font-semibold">
                    Information You Provide:
                  </span>{" "}
                  The Developer may collect personal information that you
                  voluntarily provide when contacting the Developer through the
                  Website or by email. This may include your name, email
                  address, phone number, and any other information you choose to
                  provide.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Automatically Collected Information:
                  </span>{" "}
                  The Website may automatically collect certain information
                  about your visit, including your IP address, browser type,
                  operating system, referral URLs, and other browsing behavior.
                </p>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              2. Use of Information
            </h4>
            <p className="ml-5">
              The Developer may use the information collected for the following
              purposes:
            </p>
            <ul className="flex flex-col gap-5 list-disc my-5 ml-16">
              <li>
                To respond to inquiries and provide services requested by you.
              </li>
              <li>To improve the Website and enhance user experience.</li>
              <li>
                To communicate with you about updates, promotions, and other
                relevant information.
              </li>
            </ul>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              3. Data Sharing
            </h4>
            <p className="ml-5">
              The Developer may share personal information with third-party
              service providers or business partners who assist in operating the
              Website or providing services to you. The Developer does not sell
              or rent personal information to third parties.
            </p>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              4. Data Security
            </h4>
            <p className="ml-5">
              The Developer takes reasonable measures to protect personal
              information from unauthorized access, disclosure, alteration, or
              destruction. However, no method of transmission over the internet
              or electronic storage is completely secure, and the Developer
              cannot guarantee absolute security of your information.
            </p>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              5. Third-Party Links
            </h4>
            <p className="ml-5">
              The Website may contain links to third-party websites or services.
              The Developer is not responsible for the privacy practices or
              content of such websites. We encourage you to review the privacy
              policies of third-party websites before providing any personal
              information.
            </p>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">6. Cookies</h4>
            <p className="ml-5">
              The Website may use cookies and similar tracking technologies to
              enhance user experience and collect information about usage
              patterns. You may choose to disable cookies in your browser
              settings, but please note that some features of the Website may
              not function properly as a result.
            </p>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              Children's Privacy
            </h4>
            <p className="ml-5">
              The Website is not intended for children under the age of 13. The
              Developer does not knowingly collect personal information from
              children under 13 years of age. If you believe that a child has
              provided personal information without parental consent, please
              contact the Developer to have it removed.
            </p>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              7. Updates to Privacy Policy
            </h4>
            <p className="ml-5">
              The Developer may update this Privacy Policy from time to time.
              Any changes will be reflected on this page with the updated
              effective date. We encourage you to review this Privacy Policy
              periodically for any changes.
            </p>
          </li>
          <li className="list-item">
            <h4 className="font-semibold text-lg font-poppins">
              8. Contact Us
            </h4>
            <p className="ml-5">
              If you have any questions or concerns about this Privacy Policy,
              please contact&nbsp;
              <span className="text-blue-900 font-bold underline underline-offset-4">
                nikhivishwa.1234@gmail.com
              </span>{" "}
              .
            </p>
          </li>
        </ul>

        <p>
          By using the Website, you agree to the terms and conditions of this
          Privacy Policy.
        </p>
      </div>
    </>
  );
}

export default privacyPolicy;
