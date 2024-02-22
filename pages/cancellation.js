import Link from "next/link";

function Cancellation() {
  return (
    <>
      <div className="flex w-10/12 my-10 gap-3 flex-col mx-auto text-[15px]">
        <h1 className="font-bold text-center text-3xl font-poppins mb-2">
          Cancellation and Refund Policy
        </h1>
        <p className="">
          <span className="text-blue-900 font-bold underline underline-offset-4">
            Nikhil Vishwakarma
          </span>
          &nbsp;(&quot;Developer&quot;) strives to provide high-quality services to all
          clients. However, we understand that circumstances may arise that
          require cancellations or refunds. This Cancellation and Refund Policy
          outlines the terms and conditions related to cancellations and refunds
          for services provided by the Developer through the{" "}
          <Link
            href={"https://nikhivishwa.me/"}
            target="_blank"
            className="text-blue-900 font-bold underline underline-offset-4"
          >
            nikhivishwa.me
          </Link>{" "}
          website (&quot;Website&quot;).
        </p>
        <ul className="flex flex-col gap-5">
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              1. Cancellation Policy
            </h4>
            <ul className="flex flex-col gap-5 list-disc my-5 ml-10 font-poppins">
              <li>
                <p>
                  <span className="font-semibold">
                    Client-Requested Cancellations:
                  </span>{" "}
                  Clients may request cancellations of services by contacting
                  the Developer directly through the Website or by email. The
                  Developer will make reasonable efforts to accommodate
                  cancellation requests.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Developer-Requested Cancellations:
                  </span>{" "}
                  The Developer reserves the right to cancel services in cases
                  of non-payment, violation of terms and conditions, or other
                  reasons deemed appropriate by the Developer.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              2. Refund Policy
            </h4>
            <ul className="flex flex-col gap-5 list-disc my-5 ml-10 font-poppins">
              <li>
                <p>
                  <span className="font-semibold">
                    Refunds for Services Not Rendered:
                  </span>{" "}
                  If services have not been rendered due to client-requested
                  cancellations or Developer-requested cancellations, clients
                  may be eligible for a full or partial refund depending on the
                  circumstances.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Refunds for Services Rendered:
                  </span>{" "}
                  Refunds for services already rendered will be considered on a
                  case-by-case basis. The Developer will assess the nature of
                  the services provided and the reason for the refund request.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Refund Processing:</span>{" "}
                  Refunds, if applicable, will be processed using the original
                  method of payment. Processing times may vary depending on the
                  payment provider.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              3. Non-Refundable Fees
            </h4>
            <ul className="flex flex-col gap-5 list-disc my-5 ml-10 font-poppins">
              <li>
                <p>
                  <span className="font-semibold">
                    Initial Consultation Fees:
                  </span>{" "}
                  Fees paid for initial consultations or assessments are
                  non-refundable, as they cover the time and resources expended
                  by the Developer.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Third-Party Fees:</span> Fees
                  paid to third-party service providers or platforms for
                  hosting, domain registration, or other services are subject to
                  the refund policies of the respective providers.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              4. Dispute Resolution
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                In the event of disputes regarding cancellations or refunds,
                clients are encouraged to contact the Developer to resolve the
                issue amicably.
              </li>
              <li>
                If disputes cannot be resolved informally, clients may seek
                legal remedies as provided by applicable laws and regulations.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              5. Changes to Policy
            </h4>
            <p className="ml-5">
              The Developer reserves the right to modify or update this
              Cancellation and Refund Policy at any time without prior notice.
              Any changes will be effective immediately upon posting on the
              Website.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              6. Contact Us
            </h4>
            <p className="ml-5">
              If you have any questions or concerns about this Cancellation and
              Refund Policy, please contact&nbsp;
              <span className="text-blue-900 font-bold underline underline-offset-4">
                nikhivishwa.1234@gmail.com
              </span>{" "}
              .
            </p>
          </li>

          <p>
            By using the Website and engaging the Developer&apos;s services, you
            agree to the terms and conditions of this Cancellation and Refund
            Policy.
          </p>
        </ul>
      </div>
    </>
  );
}

export default Cancellation;
