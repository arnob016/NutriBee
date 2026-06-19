import "~/styles/globals.css";

import { type Metadata } from "next";
import { Nunito } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";

export const metadata: Metadata = {
  title: "NutriBee — Small habits, sweet results",
  description:
    "Evidence-based nutrition coaching, meal planning, and resources from a registered dietitian. Friendly, practical, and always backed by science.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="bg-cream font-sans text-charcoal-800 antialiased">
        <TRPCReactProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
