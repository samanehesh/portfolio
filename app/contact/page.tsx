// "use client";

// import React, { useRef, useState } from "react";
// import { LinkedinLogoIcon, GithubLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
// import emailjs from "@emailjs/browser";
// import "@/styles/style.cantact.css";

// const ContactPage = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [status, setStatus] = useState(""); // Show success/error message

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     emailjs.sendForm(
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//       formRef.current,
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//     )

//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           formRef.current?.reset(); // Clear the form
//         },
//         (err) => {
//           console.error(err);
//           setStatus("Failed to send message. Try again later.");
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <section className="contact-card">
//         <h1 className="name">Samaneh Heshmatzadeh</h1>
//         <h2 className="role">Full Stack Software Developer</h2>

//         <p className="intro">
//           I’m always open to discussing new opportunities, collaborations,
//           or interesting projects. Feel free to reach out.
//         </p>

//         <div className="contact-info">
//           <a href="mailto:sama.heshmatzadeh@gmail.com" className="contact-link">
//             <EnvelopeSimpleIcon size={20} />
//             <span>sama.heshmatzadeh@gmail.com</span>
//           </a>

//           <a
//             href="https://github.com/samanehesh"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="contact-link"
//           >
//             <GithubLogoIcon size={20} />
//             <span>GitHub</span>
//           </a>

//           <a
//             href="https://www.linkedin.com/in/heshmatzadeh"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="contact-link"
//           >
//             <LinkedinLogoIcon size={20} />
//             <span>LinkedIn</span>
//           </a>
//         </div>

//         {/* Uncontrolled form fields (required by EmailJS) */}
//         <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Your name" required />
//           <input type="email" name="email" placeholder="Your email" required />
//           <textarea name="message" placeholder="Your message" rows={4} required />
//           <button type="submit">Send Message</button>
//         </form>

//         {status && <p style={{ marginTop: "10px", fontSize: "14px" }}>{status}</p>}
//       </section>
//     </div>
//   );
// };

// export default ContactPage;

"use client";

import React, { useRef, useState } from "react";
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(""); // Show success/error message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current?.reset(); // Clear the form
        },
        (err) => {
          console.error(err);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4">
      <section className="contact-card w-full max-w-md p-6 md:p-8 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="name text-2xl font-bold mb-2">Samaneh Heshmatzadeh</h1>
        <h2 className="role text-lg mb-4 text-gray-700 dark:text-gray-300">
          Full Stack Software Developer
        </h2>

        <p className="intro mb-6">
          I’m always open to discussing new opportunities, collaborations,
          or interesting projects. Feel free to reach out.
        </p>

        <div className="contact-info flex flex-col gap-3 mb-6">
          <a
            href="mailto:sama.heshmatzadeh@gmail.com"
            className="contact-link flex items-center gap-2 hover:text-blue-500 transition-colors"
          >
            <EnvelopeSimpleIcon size={20} />
            <span>sama.heshmatzadeh@gmail.com</span>
          </a>

          <a
            href="https://github.com/samanehesh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link flex items-center gap-2 hover:text-blue-500 transition-colors"
          >
            <GithubLogoIcon size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/heshmatzadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link flex items-center gap-2 hover:text-blue-500 transition-colors"
          >
            <LinkedinLogoIcon size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Contact form */}
        <form
          ref={formRef}
          className="contact-form flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>
        )}
      </section>
    </div>
  );
};

export default ContactPage;

