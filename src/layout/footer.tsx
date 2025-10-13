"use client";

import Link from "next/link";
import ArrowTopRightIcon from "@/components/ArrowTopRightIcon";
import { NAV_LINKS } from "@/constant";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 mt-28 border-t border-white/10 bg-transparent"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-bold uppercase tracking-[0.28em]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/70 bg-white/10 text-accent shadow-[0_0_25px_rgba(20,180,198,0.35)]">
              HT
            </span>
            <span className="font-display text-2xl tracking-[0.35em] text-white">
              SOL
            </span>
          </Link>
          <p className="text-sm text-muted-70">
            We partner with ambitious teams to craft digital products, immersive
            brand systems, and performance marketing that accelerates growth.
            Let&apos;s design what&apos;s next together.
          </p>
          <div className="space-y-2 text-sm text-muted-70">
            <p>
              <span className="font-semibold text-white">Call:</span>{" "}
              <Link
                href="tel:+923174201604"
                className="transition hover:text-accent"
              >
                +92 317 420 1604
              </Link>
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <Link
                href="mailto:hello@htsolutions.com"
                className="transition hover:text-accent"
              >
                hello@htsolutions.com
              </Link>
            </p>
            <p>
              <span className="font-semibold text-white">Office:</span> Lahore,
              Pakistan
            </p>
          </div>
        </div>

        <div className="grid w-full max-w-2xl gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          <div>
            <h4 className="font-display text-lg tracking-[0.25em] text-white">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-70">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-[0.25em] text-white">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-70">
              <li>Strategy &amp; Discovery</li>
              <li>Design Systems</li>
              <li>Full-Stack Engineering</li>
              <li>Marketing Automation</li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-lg tracking-[0.25em] text-white">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-muted-70">
              Monthly updates on digital products, growth stories, and insights.
            </p>
            <form className="mt-5 flex w-full items-center rounded-full border border-white/10 bg-white/5 p-1.5 shadow-[0_20px_60px_rgba(3,12,24,0.45)] backdrop-blur">
              <input
                type="email"
                placeholder="Your email"
                className="h-11 flex-1 rounded-full bg-transparent px-4 text-sm text-white placeholder:text-muted-60 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-deep-900 transition hover:bg-accent/90"
                aria-label="Subscribe to newsletter"
              >
                <ArrowTopRightIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 py-6 text-xs uppercase tracking-[0.25em] text-muted-60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} HT Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#privacy" className="transition hover:text-accent">
              Privacy
            </Link>
            <Link href="#terms" className="transition hover:text-accent">
              Terms
            </Link>
            <Link href="#sitemap" className="transition hover:text-accent">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
