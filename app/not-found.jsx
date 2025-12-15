import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-100 px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-neutral-100 text-sky-700 mb-5">
          <svg
            className="size-7"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M21 10l-9 4-9-4" />
            <path d="M21 14l-9 4-9-4" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-800">
          Page Not Found
        </h1>
        <p className="mt-2 text-slate-600">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-sky-600 transition-all duration-300 ease-in-out cursor-pointer text-white px-4 py-2 hover:bg-sky-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
