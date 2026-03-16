import { BUILDZOOM_URL } from "@/lib/constants";

type TrustBarVariant = "light" | "dark";

interface TrustBarProps {
  variant?: TrustBarVariant;
}

const credentials = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: "Licensed",
    detail: "#1075671",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: "Bonded & Insured",
    detail: null,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "SMUD-Approved",
    detail: "Contractor",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    label: "Permitted Work",
    detail: "Fully Inspected",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    label: "BuildZoom",
    detail: "Score 108",
    href: BUILDZOOM_URL,
  },
];

export function TrustBar({ variant = "light" }: TrustBarProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`w-full ${isDark ? "bg-brand-dark" : "bg-brand-light-gray"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
          {credentials.map((cred, index) => {
            const content = (
              <>
                <span
                  className={isDark ? "text-brand-accent" : "text-brand-accent"}
                >
                  {cred.icon}
                </span>
                <span className="font-heading text-sm font-bold">
                  {cred.label}
                </span>
                {cred.detail && (
                  <span
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-brand-gray"
                    }`}
                  >
                    {cred.detail}
                  </span>
                )}
                {"href" in cred && cred.href && (
                  <span className="ml-1 text-xs opacity-75">→</span>
                )}
              </>
            );
            return (
              <li
                key={index}
                className={`flex items-center gap-2 px-4 py-3 sm:py-4 ${
                  isDark ? "text-white" : "text-brand-blue"
                }`}
              >
                {"href" in cred && cred.href ? (
                  <a
                    href={cred.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    aria-label={`${cred.label} ${cred.detail ?? ""} — View profile`}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
