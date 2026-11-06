import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  Bot,
  Cloud,
  Clapperboard,
  Code2,
  Globe2,
  Mail,
  MapPin,
  Search,
  Settings,
  ShoppingCart,
  TicketCheck,
  UtensilsCrossed,
  UsersRound,
  Workflow,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SITE, NAV_SERVICES } from "../data/site";

const footerServices = [
  NAV_SERVICES[5],
  NAV_SERVICES[0],
  NAV_SERVICES[8],
  NAV_SERVICES[1],
  NAV_SERVICES[2],
  NAV_SERVICES[9],
];

const industries = [
  { label: "Restaurants & Food Services", icon: UtensilsCrossed },
  { label: "Video Editing & Animation", icon: Clapperboard },
  { label: "Ticket Reselling Automation", icon: TicketCheck },
  { label: "E-Commerce & Retail", icon: ShoppingCart },
  { label: "Business Management & Startups", icon: Settings },
  { label: "View All Industries", icon: Cloud },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsAccessKey,
          subject: "New website project inquiry",
          from_name: "TixonSolution Website",
          replyto: email.trim(),
          email: email.trim(),
          message: "A visitor requested a project discussion through the website footer.",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send inquiry");
      setSent(true);
      setEmail("");
    } catch (submissionError) {
      setError(submissionError.message || "Unable to send inquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="border-t border-green-200 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.02fr_1.02fr_1.08fr] lg:gap-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2" aria-label="TixonSolution home">
              <span className="text-xl font-black tracking-tight text-gray-900">
                Tixon<span className="text-green-600">Solution</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[330px] text-sm font-medium leading-6 text-gray-700">
              We build custom software and AI-powered solutions that help businesses work smarter, grow faster, and scale with confidence.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-gray-800 transition-colors hover:text-green-600"
            >
              <span className="text-green-600"><Mail size={17} /></span>
              {SITE.email}
            </a>
            <div className="mt-4 flex items-center gap-3 text-sm font-bold text-gray-700">
              <MapPin size={17} className="text-green-600" />
              Serving clients worldwide
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black text-gray-900">Our Services</h4>
            <ul className="mt-6 space-y-4">
              {footerServices.map((item, index) => {
                const icons = [Bot, Code2, Cloud, Search, Workflow, UsersRound];
                const Icon = icons[index];
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex items-center gap-3 text-sm font-bold text-gray-700 transition-colors hover:text-green-600"
                    >
                      <span className="flex h-6 w-6 items-center justify-center text-green-600">
                        <Icon size={17} />
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-gray-900">Industries We Serve</h4>
            <ul className="mt-6 space-y-4">
              {industries.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    to="/#industries"
                    className="group flex items-center gap-3 text-sm font-bold text-gray-700 transition-colors hover:text-green-600"
                  >
                    <span className="flex h-6 w-6 items-center justify-center text-green-600">
                      <Icon size={17} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-gray-900">Start a Project</h4>
            <p className="mt-6 text-sm font-medium leading-6 text-gray-600">
              Add your email to open a project inquiry directly with our team.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email"
                className="h-12 w-full rounded-lg border border-green-300 bg-white px-4 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
              <button
                type="submit"
                disabled={sending}
                className="mt-3 h-12 w-full rounded-lg bg-green-600 text-sm font-bold text-white shadow-[0_8px_20px_rgba(22,163,74,.18)] transition hover:bg-green-700"
              >
                {sending ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-xs font-semibold text-green-700">Your project inquiry has been sent.</p>
            )}
            {error && (
              <p className="mt-3 text-xs font-semibold text-red-600">{error}</p>
            )}
            <div className="mt-5 flex items-center justify-between gap-4">
              <Link to="/privacy-policy" className="text-[11px] font-medium text-gray-500 hover:text-green-600">
                Privacy Policy
              </Link>
              <div className="flex items-center gap-3 text-gray-400">
                <Facebook size={17} className="hover:text-green-600" />
                <Linkedin size={17} className="hover:text-green-600" />
                <Instagram size={17} className="hover:text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
          <p className="text-sm font-medium text-gray-600">
            © {new Date().getFullYear()} TixonSolution. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white shadow-[0_8px_24px_rgba(22,163,74,.3)] transition-transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={19} />
          </button>
        </div>
      </div>
    </footer>
  );
}
