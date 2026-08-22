"use client";
import { sendMail } from "@/actions/sendMailAction";
import BtnContactForm from "./btn-contact-form";
import toast from "react-hot-toast";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";

import { siteData } from "@/src/data/site";

function Contact() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Contact",
    amount: 0.5,
  });

  const { personal, social, upworkCta } = siteData;

  return (
    <section
      role="region"
      aria-labelledby="contact-me-section"
      ref={refSection}
      id="contact"
      className="flex justify-center items-center flex-col gap-12 scroll-m-28 max-w-[48rem] w-full px-4"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 id="contact-me-section" className="headerText">
          Contact Me.
        </h1>
        <p className="subText">
          Please Contact Me Directly At &nbsp;
          <a
            href={`mailto:${personal.email}`}
            className="underline text-[#0b0a1d] dark:text-gray-50"
          >
            {personal.email}
          </a>
          &nbsp;Or Through This Form .
        </p>
      </div>
      <form
        aria-label="contact form"
        action={async (formData) => {
          const { error, data } = await sendMail(formData);
          if (error) {
            toast.error("unsuccessful try agin");
            return;
          }
          toast.success("successful send wait for my response");
          return;
        }}
        className="flex flex-col items-center justify-center w-full gap-4"
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Enter Your Email "
          required
          maxLength={500}
          className="bg-white rounded-xl shadow-md p-5 w-full focus:outline-[#0b0a1da8] dark:bg-[#17181c]"
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          required
          maxLength={5000}
          className="bg-white rounded-xl shadow-xl p-5 w-full min-h-[200px] max-h-[400px] focus:outline-[#0b0a1da8] dark:bg-[#17181c]"
        />
        <BtnContactForm />
      </form>

      {/* Upwork CTA */}
      <div className="flex flex-col items-center justify-center gap-4 w-full rounded-2xl bg-gray-200 dark:bg-[#17181c] px-6 py-10 shadow-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{upworkCta.title}</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-gray-300 max-w-md">
          {upworkCta.description}
        </p>
        <a href={social.upwork} target="_blank" className="btn primary">
          {upworkCta.linkLabel} →
        </a>
      </div>
    </section>
  );
}

export default Contact;
