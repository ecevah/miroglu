"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export default function CookieConsent() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-0 right-0 z-[1000] flex justify-center px-3 sm:px-4 pointer-events-none max-w-[750px] ml-auto">
      <div className="pointer-events-auto w-full max-w-[92rem]">
        <div className="relative rounded-xl sm:rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/10 px-4 sm:px-5 py-3 sm:py-2.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Cookie Icon in soft circle */}
          <div className="flex-shrink-0 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/[0.04] ring-1 ring-black/10 self-start sm:self-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-black/70"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M12 2a10 10 0 1 0 10 10 5 5 0 0 1-5-5 5 5 0 0 1-5-5Z"
              />
              <circle cx="8.5" cy="11.5" r="1.2" fill="#fff" />
              <circle cx="12" cy="8" r="1.2" fill="#fff" />
              <circle cx="15.5" cy="13.5" r="1.2" fill="#fff" />
            </svg>
          </div>

          {/* Message */}
          <p className="flex-1 text-[13px] sm:text-sm text-black font-medium leading-snug text-center sm:text-left">
            {t.cookie?.message ||
              'By clicking "Accept", you agree to the storing of cookies on your device.'}
            {t.cookie?.more ? (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="ml-2 inline-flex underline decoration-black/30 hover:decoration-black text-black/80 text-[12px] sm:text-xs font-semibold"
              >
                {t.cookie.more}
              </button>
            ) : null}
          </p>

          {/* Actions */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleReject}
              className="h-11 sm:h-10 px-5 rounded-full border border-black/15 bg-white text-black text-sm font-semibold hover:bg-black/[0.04] transition-colors w-full sm:w-auto"
            >
              {t.cookie?.reject || "Reject"}
            </button>
            <button
              onClick={handleAccept}
              className="h-11 sm:h-10 px-5 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/90 transition-colors w-full sm:w-auto"
            >
              {t.cookie?.accept || "Accept"}
            </button>
          </div>
        </div>
      </div>

      {showDetails ? (
        <div className="pointer-events-auto fixed inset-0 z-[1100] flex items-center justify-center bg-black/50 px-4">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl ring-1 ring-black/10 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-semibold text-black">
                {t.cookie?.title || "Cookie Policies"}
              </h3>
              <button
                type="button"
                className="rounded-full px-2 py-1 text-sm hover:bg-black/5"
                onClick={() => setShowDetails(false)}
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-black/80 whitespace-pre-line">
              {t.cookie?.long || t.cookie?.message}
            </div>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="h-10 px-4 rounded-full border border-black/15 bg-white text-black text-sm font-semibold hover:bg-black/[0.04]"
                onClick={() => setShowDetails(false)}
              >
                {t.cookie?.reject || "Close"}
              </button>
              <button
                type="button"
                className="h-10 px-4 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/90"
                onClick={() => {
                  handleAccept();
                  setShowDetails(false);
                }}
              >
                {t.cookie?.accept || "Accept"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
