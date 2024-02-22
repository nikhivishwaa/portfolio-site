import Link from "next/link";

function termsOfService() {
  return (
    <>
      <div className="flex w-10/12 my-10 gap-3 flex-col mx-auto text-[15px]">
        <h1 className="font-bold text-center text-3xl font-poppins mb-2">
          Terms and Conditions
        </h1>
        <p>
          These terms and conditions ("Terms") govern your use of the{" "}
          <Link
            href={"https://nikhivishwa.me/"}
            target="_blank"
            className="text-blue-900 font-bold underline underline-offset-4"
          >
            nikhivishwa.me
          </Link>{" "}
          website ("Website") and your engagement with{" "}
          <span className="text-blue-900 font-bold underline underline-offset-4">
            Nikhil Vishwakarma
          </span>
          &nbsp;("Developer"), a full-stack developer. By accessing the Website
          and/or placing an order for services, you agree to comply with and be
          bound by these Terms. If you do not agree with any part of these
          Terms, please do not use the Website or engage the Developer's
          services.
        </p>
        <ul className="flex flex-col gap-5">
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              1. Services Offered
            </h4>
            <p className="ml-5">
              The Developer offers full-stack development services, including
              but not limited to website design, development, maintenance, and
              consultation ("Services").
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">2. Orders</h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                Clients may place orders for Services through the Website or by
                contacting the Developer directly.
              </li>
              <li>All orders are subject to acceptance by the Developer. </li>
              <li>
                The Developer reserves the right to decline orders at their
                discretion.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              3. Pricing and Payment
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                Pricing for Services is provided on the Website or communicated
                directly to the client.
              </li>
              <li>
                Payments for Services are due as agreed upon between the
                Developer and the client.
              </li>
              <li>
                All payments must be made in full prior to the delivery of
                Services, unless otherwise agreed upon.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">4. Delivery</h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                The Developer will make reasonable efforts to deliver Services
                within agreed-upon timeframes.
              </li>
              <li>
                Delays may occur due to unforeseen circumstances or changes
                requested by the client.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              5. Intellectual Property
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                The Developer retains ownership of all intellectual property
                rights associated with the Services, including but not limited
                to code, designs, and concepts.
              </li>
              <li>
                Upon full payment, the client will receive a license to use the
                deliverables for their intended purpose.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              6. Client Responsibilities
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                Clients are responsible for providing clear and accurate
                requirements for Services.
              </li>
              <li>
                Clients must provide timely feedback and approvals to facilitate
                the completion of Services.
              </li>
              <li>
                Clients are responsible for ensuring compliance with all
                applicable laws and regulations regarding the use of Services.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              7. Limitation of Liability
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                The Developer shall not be liable for any indirect, incidental,
                special, or consequential damages arising out of or in
                connection with the use of Services.
              </li>
              <li>
                The total liability of the Developer shall not exceed the total
                amount paid by the client for the Services.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              8. Termination
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                Either party may terminate engagement for Services with prior
                written notice.
              </li>
              <li>
                Upon termination, the client is responsible for payment of
                Services rendered up to the termination date.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              9. Amendments
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                These Terms may be amended by the Developer from time to time.
              </li>
              <li>Clients will be notified of any changes to these Terms.</li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold text-lg font-poppins">
              10. Governing Law
            </h4>
            <ul className="flex flex-col gap-4 list-disc my-5 ml-10 font-poppins">
              <li>
                These Terms are governed by and construed in accordance with the
                laws of India.
              </li>
              <li>
                Any disputes arising out of or in connection with these Terms
                shall be subject to the exclusive jurisdiction of the courts in
                Bhopal (Madhya Pradesh).
              </li>
            </ul>
          </li>
        </ul>
        <p className="ml-5">
          By using the Website or engaging the Developer's services, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms.{" "}
        </p>
        <p className="ml-5">
          If you have any questions or concerns about these Terms, please
          contact&nbsp;
          <span className="text-blue-900 font-bold underline underline-offset-4">
            nikhivishwa.1234@gmail.com
          </span>{" "}
          .{" "}
        </p>
      </div>
    </>
  );
}

export default termsOfService;
