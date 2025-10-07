"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LenisProvider } from "./lenis-provider";

let isRegistered = false;

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    if (!isRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      isRegistered = true;
    }

    ScrollTrigger.defaults({
      markers: false,
    });
  }, []);

  return <LenisProvider>{children}</LenisProvider>;
}
