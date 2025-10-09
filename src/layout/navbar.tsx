"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
              <ContactCTA />
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
                <ContactCTA onClick={() => setOpen(false)} />
                <Button
                  href="tel:+923174201604"
                  variant="outline"
                  icon={<PhoneIcon />}
                >
                  +92 317 420 1604
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function ContactCTA({ onClick }: { onClick?: () => void }) {
  return (
    <Button href="#contact" icon={<ArrowTopRightIcon />} onClick={onClick}>
      Contact Us
    </Button>
  );
}

function ArrowTopRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11L11 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3H11V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 7H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 13H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L13 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 9.68688V11.0836C11.6667 11.3649 11.437 11.5903 11.1493 11.5869C10.3833 11.5781 8.82767 11.3951 7.28908 10.3352C5.51783 9.10929 4.23692 6.9411 3.77258 6.07691C3.68825 5.92048 3.68825 5.7393 3.77258 5.58287C4.23692 4.71868 5.51783 2.55049 7.28908 1.32461C8.82767 0.264682 10.3833 0.0816746 11.1493 0.0729019C11.437 -0.000934714 11.6667 0.224531 11.6667 0.505765V1.90251C11.6667 2.15353 11.4883 2.37262 11.2427 2.42236L9.691 2.73538C9.46417 2.7805 9.30275 2.9852 9.327 3.21374C9.37858 3.69944 9.30983 4.2311 8.81058 4.69666C8.42092 5.05908 8.45117 5.64025 8.81058 6.00267L9.077 6.26204C9.93233 7.0955 10.9472 7.79766 11.6245 8.19322C11.8563 8.32666 11.9597 8.60784 11.8741 8.86065L11.2427 10.4705C11.1584 10.7052 10.9146 10.833 10.6735 10.7704C10.0732 10.6122 9.33092 10.3122 8.6885 9.81866"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
