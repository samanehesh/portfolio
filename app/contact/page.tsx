// "use client";

// import React from "react";
// import { LinkedinLogoIcon, GithubLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
// import "@/styles/style.cantact.css";

// const ContactPage = () => {
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
//           <a
//             href="mailto:sama.heshmatzadeh@gmail.com"
//             className="contact-link"
//           >
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

//         <form
//           className="contact-form"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             type="text"
//             placeholder="Your name"
//             aria-label="Your name"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your email"
//             aria-label="Your email"
//             required
//           />
//           <textarea
//             placeholder="Your message"
//             aria-label="Your message"
//             rows={4}
//             required
//           />
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;


// "use client";

// import React, { useRef, useState } from "react";
// import { LinkedinLogoIcon, GithubLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
// import emailjs from "@emailjs/browser";
// import "@/styles/style.cantact.css";

// const ContactPage = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [status, setStatus] = useState(""); // For success/error messages

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     emailjs
//       .sendForm(
//         "service_7aqr90q",   // Replace with your EmailJS Service ID
//         "template_cjuntbf",  // Replace with your EmailJS Template ID
//         formRef.current,
//         "QqtuQko1VG8EqsbLK"    // Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           formRef.current?.reset(); // Clear form
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

//         <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Your name" name="name" required />
//           <input type="email" placeholder="Your email" name="email" required />
//           <textarea placeholder="Your message" name="message" rows={4} required />
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
import { LinkedinLogoIcon, GithubLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import "@/styles/style.cantact.css";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(""); // Show success/error message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
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
    <div className="contact-container">
      <section className="contact-card">
        <h1 className="name">Samaneh Heshmatzadeh</h1>
        <h2 className="role">Full Stack Software Developer</h2>

        <p className="intro">
          I’m always open to discussing new opportunities, collaborations,
          or interesting projects. Feel free to reach out.
        </p>

        <div className="contact-info">
          <a href="mailto:sama.heshmatzadeh@gmail.com" className="contact-link">
            <EnvelopeSimpleIcon size={20} />
            <span>sama.heshmatzadeh@gmail.com</span>
          </a>

          <a
            href="https://github.com/samanehesh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <GithubLogoIcon size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/heshmatzadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <LinkedinLogoIcon size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Uncontrolled form fields (required by EmailJS) */}
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows={4} required />
          <button type="submit">Send Message</button>
        </form>

        {status && <p style={{ marginTop: "10px", fontSize: "14px" }}>{status}</p>}
      </section>
    </div>
  );
};

export default ContactPage;

