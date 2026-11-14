// src/features/home/components/services/lib/contact.ts

import { siteSettings } from "@/data/site-settings";

export type ContactLink = {
  href: string;
  external: boolean;
};

/** Link de contato com mensagem pré-preenchida (WhatsApp, com fallback para e-mail). */
export function buildContactLink(message: string): ContactLink {
  const { whatsapp, email } = siteSettings.contact;
  const digits = whatsapp?.replace(/\D/g, "");

  if (digits) {
    return {
      href: `https://wa.me/${digits}?text=${encodeURIComponent(message)}`,
      external: true,
    };
  }

  return {
    href: `mailto:${email}?body=${encodeURIComponent(message)}`,
    external: false,
  };
}
