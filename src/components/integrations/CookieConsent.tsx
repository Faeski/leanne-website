"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES } from "@/lib/constants";

const CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue;
    setConsent(stored);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    // Trigger GA4 initialization via custom event
    window.dispatchEvent(new CustomEvent("cookie-consent-accepted"));
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
  };

  // Don't render on server or if consent already given
  if (!mounted || consent !== null) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg md:p-6"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-sm text-neutral-700">
              Wij gebruiken cookies om uw ervaring te verbeteren en websiteverkeer
              te analyseren. Door op &quot;Accepteren&quot; te klikken, gaat u
              akkoord met ons gebruik van cookies.{" "}
              <Link
                href={ROUTES.PRIVACY}
                className="text-primary-600 underline hover:text-primary-700"
              >
                Lees ons privacybeleid
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleDecline}
              className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              Weigeren
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
            >
              Accepteren
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Helper hook for checking consent status
export function useCookieConsent(): boolean {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem(CONSENT_KEY);
      setHasConsent(stored === "accepted");
    };

    checkConsent();

    const handleConsentAccepted = () => setHasConsent(true);
    window.addEventListener("cookie-consent-accepted", handleConsentAccepted);

    return () => {
      window.removeEventListener(
        "cookie-consent-accepted",
        handleConsentAccepted
      );
    };
  }, []);

  return hasConsent;
}
