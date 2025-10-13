"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowTopRightIcon from "@/components/ArrowTopRightIcon";
import CloseIcon from "@/components/CloseIcon";
import MenuIcon from "@/components/MenuIcon";
import PhoneCTA from "@/components/PhoneCTA";
import { NAV_LINKS } from "@/constant";
import { Button } from "@/ui/button";
import Image from "next/image";

const baseNavItem =
  "relative  rounded-full px-5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 whitespace-nowrap";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash || "#home";
      setActiveLink(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigate = (href: string) => {
    setActiveLink(href);
    setOpen(false);
  };

  return (
    <header className="relative z-30">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between  py-6 lg:py-10 overflow-hidden relative bg-cover bg-center bg-no-repeat scroll-mt-32 pt-6  ">
      <div className="absolute inset-0 bg-[url('/image-banner.png')] bg-cover bg-center bg-no-repeat opacity-20 z-0"></div>
        <Link
          href="/"
        
        >
          <Image
            src="/ht-logo.png"
            alt="HT Solutions"
            width={162}
            height={48}
            priority
            className="h-full w-full select-none"
          />
        </Link>

        <nav className="hidden items-center lg:flex">
          <div className="flex items-center rounded-full border border-accent bg-white/5 px-1 py-1">
            <div className="flex items-center">
              <div className="flex items-center rounded-full py-1 ">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = activeLink === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => handleNavigate(href)}
                      className={[
                        baseNavItem,
                        isActive
                          ? "bg-accent text-white"
                          : "text-white hover:text-white",
                      ].join(" ")}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <Button href="#contact" icon={<ArrowTopRightIcon />}>
                Contact Us
              </Button>
            </div>
          </div>
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition hover:border-accent/60 hover:text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        {open ? (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden">
            <div className="mx-auto mt-24 w-[90%] max-w-sm rounded-3xl border border-white/10 bg-deep-800/95 p-6 ">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-2xl tracking-[0.45em] text-white">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-accent/60 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex flex-col ">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = activeLink === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => handleNavigate(href)}
                      className={[
                        "rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition",
                        isActive
                          ? "bg-accent text-white"
                          : "text-white hover:border-accent/60 hover:text-white",
                      ].join(" ")}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href="#contact"
                  icon={<ArrowTopRightIcon />}
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Button>
                <PhoneCTA onClick={() => setOpen(false)} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
