"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="mt-6 flex w-full max-w-sm overflow-hidden rounded-lg border border-ivory/10"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to the newsletter provider once chosen.
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="min-w-0 flex-1 bg-black/40 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-ivory px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
      >
        Subscribe
      </button>
    </form>
  );
}
