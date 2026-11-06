import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-[72px] text-center">
      <p className="text-7xl font-extrabold tracking-tight text-green-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        Oops! Page not found
      </h1>
      <p className="mt-2 text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="glow-btn mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
      >
        Return to Home
      </Link>
    </div>
  );
}
