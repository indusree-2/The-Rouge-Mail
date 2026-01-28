import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Loading elegant serif for titles and a clean sans-serif for UI
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rouge Mail | Witty Words for the Nocturnal Heart",
  description: "An epistolary sanctuary for deep thoughts and dark cherries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cherry text-parchment antialiased selection:bg-wax selection:text-white">
        {/* Subtle Global Overlay: Grainy Texture */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* Global Navigation Logo */}
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference">
          <span className="font-serif italic text-xl tracking-widest opacity-50">
            RM
          </span>
        </nav>

        {/* Main Content Area */}
        {children}
      </body>
    </html>
  );
}
