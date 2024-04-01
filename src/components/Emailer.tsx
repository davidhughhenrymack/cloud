"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Emailer() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: FormEvent) => {
    setSending(true);
    e.preventDefault();

    emailjs
      .sendForm("service_wulherd", "template_y6zy7fb", form.current!, {
        publicKey: "MrdUJRMXqZRF4f_G6",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  if (success)
    return (
      <div className="p-[50px] rainbow-box text-center">
        <h1 className="m-0 text-black">SENT!!!!! Thanks</h1>
      </div>
    );

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <h2>Send a message</h2> */}
      <label>Your email:</label>
      <input
        type="email"
        placeholder="shrig@"
        className="w-full"
        name="reply_to"
      />
      <label>Message:</label>
      <textarea
        placeholder="Heyyyyy"
        rows={5}
        className="w-full"
        name="message"
      />
      <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        {sending ? "Sending..." : " → SEND → "}
      </button>
    </form>
  );
}
