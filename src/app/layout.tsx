import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { Providers } from "@/providers/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "HT Solutions | Digital Agency",
  description:
    "HT Solutions crafts premium digital experiences spanning web, mobile, branding, and performance marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${bebas.variable} bg-surface text-muted-100 antialiased`}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-x-0 top-[-30%] h-[120vh] w-full bg-[radial-gradient(circle_at_20%_20%,_rgba(20,180,198,0.35),_rgba(3,12,24,0)_60%),radial-gradient(circle_at_80%_10%,_rgba(67,217,255,0.25),_rgba(3,12,24,0)_55%),linear-gradient(180deg,_#040b12_0%,_#020409_60%,_#010409_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_120%,_rgba(17,124,130,0.4),_rgba(0,0,0,0)_60%)]" />
              <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(21,152,182,0.35)_0%,_rgba(21,152,182,0)_60%)] blur-[120px]" />
            </div>
            <Navbar />
            <main className="relative z-10 flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
