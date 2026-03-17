"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "(916) 584-2124";
const PHONE_HREF = "tel:+19165842124";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Panel Upgrades", href: "/services/panel-upgrade" },
      { label: "SMUD Rebates", href: "/services/smud-rebates" },
      { label: "EV Charger Installation", href: "/services/ev-charger-installation" },
      { label: "Whole House Rewiring", href: "/services/whole-house-rewiring" },
      { label: "Insurance Coordination", href: "/services/insurance-panel-replacement" },
      { label: "Battery Backup", href: "/services/battery-backup" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change using derived state (React-recommended pattern)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Peak Electrical Contractors — Home"
        >
          <Image
            src="/images/newest-logo.png"
            alt="Peak Electrical Contractors logo"
            width={45}
            height={45}
            className="h-[45px] w-[45px] object-contain"
          />
          <div className="hidden sm:block">
            <span className="font-heading text-base font-bold leading-none text-brand-blue">
              Peak Electrical
            </span>
            <span className="block text-xs text-brand-gray leading-none mt-0.5">
              Contractors Inc.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.href} className="relative group">
                  <button
                    className={`flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
                      isActive(link.href)
                        ? "text-brand-accent"
                        : "text-brand-dark hover:text-brand-blue"
                    }`}
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-sm border border-gray-100 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                          pathname === child.href
                            ? "bg-brand-light-gray text-brand-accent"
                            : "text-brand-dark hover:bg-brand-light-gray hover:text-brand-blue"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-brand-accent"
                    : "text-brand-dark hover:text-brand-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone CTA — desktop */}
        <a
          href={PHONE_HREF}
          className="hidden lg:flex items-center gap-2 rounded-sm bg-brand-blue px-4 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-brand-dark active:bg-black"
          aria-label={`Call us at ${PHONE_NUMBER}`}
        >
          <svg
            className="h-4 w-4 text-brand-accent shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          {PHONE_NUMBER}
        </a>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-blue text-white"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-sm text-brand-blue hover:bg-brand-light-gray transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="border-t border-gray-100 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="divide-y divide-gray-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.children ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-semibold text-brand-dark"
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 text-brand-gray transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <ul className="bg-brand-light-gray divide-y divide-gray-200/50">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block py-3 pl-8 pr-4 text-sm font-medium transition-colors ${
                                pathname === child.href
                                  ? "text-brand-accent"
                                  : "text-brand-dark hover:text-brand-blue"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3.5 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? "text-brand-accent"
                        : "text-brand-dark hover:text-brand-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href={PHONE_HREF}
                className="block bg-brand-accent px-4 py-4 text-center text-sm font-bold text-brand-dark"
              >
                📞 Call {PHONE_NUMBER}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
