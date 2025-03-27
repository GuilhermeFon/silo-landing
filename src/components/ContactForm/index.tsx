"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { translations } from "@/lib/i18n";

export function ContactForm({ lang }: { lang: "en" | "pt" }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="mt-8">
      {!isVisible ? (
        <Button onClick={() => setIsVisible(true)} className="w-full">
          {t.contact.button}
        </Button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder={t.contact.form.name}
            required
          />
          <Input
            type="email"
            placeholder={t.contact.form.email}
            required
          />
          <Textarea
            placeholder={t.contact.form.message}
            required
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full">
            {isSubmitted ? t.contact.form.success : t.contact.form.submit}
          </Button>
        </form>
      )}
    </div>
  );
}