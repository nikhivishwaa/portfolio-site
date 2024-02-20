import React, { useRef, useState } from "react";
import styles from "@/styles/Utility.module.css";

export default function ContactForm() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitMessage = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    setTimeout(
      () =>
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        }),
      100
    );
  };
  return (
    <>
      <form
        className={`max-xxs:w-11/12 max-xxs:mx-auto xs:max-w-96 xs:min-w-72 p-8 px-4 flex flex-col gap-3 font-mulish justify-center items-center ${styles.form}`}
        onSubmit={submitMessage}
      >
        <div className="max-xs:w-full flex gap-2 justify-between max-xs:justify-center max-xs:gap-3 max-xs:flex-col">
          <input
            onChange={handleChange}
            value={formData.firstname}
            className="max-xs:w-full xs:w-1/2 p-4 py-2 border rounded-sm font-medium"
            type="text"
            name="firstname"
            required
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            value={formData.lastname}
            className="max-xs:w-full xs:w-1/2 p-4 py-2 border rounded-sm font-medium"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <input
          onChange={handleChange}
          value={formData.email}
          className="w-full p-4 py-2 border rounded-sm font-medium"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          value={formData.subject}
          className="w-full p-4 py-2 border rounded-sm font-medium"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          cols="30"
          rows="4"
          placeholder="Message"
          className="w-full p-4 py-2 border rounded-sm font-medium"
          required
        ></textarea>
        <button type="submit" ref={ref} className="hidden">
          Submit
        </button>
        <span className="my-2 mt-3">
          <button
            className={`flex gap-1 text-xs font-semibold py-2 px-4 ${styles["secondary-btn"]} ${styles.spacing}`}
            onClick={() => ref.current.click()}
          >
            <span>Submit Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </span>
      </form>
    </>
  );
}
