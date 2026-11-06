import { useEffect, useState } from "react";

const KEY = "cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(!localStorage.getItem(KEY));
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-green-100 bg-white/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-gray-600">
          We use browser storage only to remember your cookie preference.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => decide("declined")}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="glow-btn rounded-full px-5 py-2 text-sm font-semibold text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
