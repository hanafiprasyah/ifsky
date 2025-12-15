export const metadata = {
  title: "Career",
  alternates: { canonical: "/career" },
};

import { createClient } from "@supabase/supabase-js";

export const revalidate = 3600; // revalidate listing every 1 hour

export default async function CareerPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: jobs, error } = await supabase
    .from("job_openings")
    .select("id, title, department, location, employment_type, apply_url")
    .eq("status", "published")
    .in("title", ["XX", "XX"])
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const listing = jobs || [];

  return (
    <>
      {/* Careers Listing */}
      <div className="bg-neutral-100">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 py-10 lg:py-20">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-neutral-600 font-semibold text-2xl md:text-4xl md:leading-tight">
              Explore Opportunities
            </h2>
            <p className="mt-1 text-neutral-500">
              We're looking for people with loyalty, integrity, and
              professionalism to join the IFSKY Infinity team.
            </p>
          </div>
          {/* End Title */}

          {/* Listing */}
          <div className="pt-10 mt-10 border-t border-neutral-800">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-xl md:text-3xl font-medium text-neutral-700">
                  Open Positions
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {listing.length} positions
                </p>
              </div>

              <div className="flex flex-col gap-y-3">
                {error && (
                  <div className="text-sm text-red-600">
                    Failed to load job openings.
                  </div>
                )}

                {listing.length === 0 && !error && (
                  <div className="text-sm text-neutral-500">
                    No openings at the moment.
                  </div>
                )}

                {listing.map((job) => (
                  <a
                    key={job.id}
                    className="py-3 px-4 group relative w-full flex justify-between gap-x-4 rounded-xl border border-blue-200 bg-neutral-100 shadow-sm hover:border-cyan-400 focus:outline-hidden focus:border-cyan-400"
                    href={job.apply_url || "#"}
                    target={
                      job.apply_url?.startsWith("http") ||
                      job.apply_url?.startsWith("mailto:")
                        ? "_blank"
                        : undefined
                    }
                    rel={job.apply_url ? "noopener noreferrer" : undefined}
                  >
                    <div className="grow">
                      <span className="text-sm font-medium text-neutral-800">
                        {job.title}
                      </span>
                      <p className="text-sm text-neutral-500">
                        {(job.location || "Remote") +
                          ", " +
                          (job.employment_type || "Full-time")}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-1">
                      <span className="text-sm font-medium text-sky-700 opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 lg:group-focus:opacity-100">
                        Apply
                      </span>
                      <svg
                        className="shrink-0 size-5 text-neutral-600"
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Listing */}
        </div>
      </div>
      {/* End Careers Listing */}
    </>
  );
}
