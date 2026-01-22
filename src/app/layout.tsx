import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-dm-sans'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: "Pure Planet | Solar & Energy Solutions",
  description: "Customized Solar & Energy Solutions for Every Melbourne Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased font-sans bg-white text-secondary`}>
        {/* We might need to conditionally render Header/Footer if we are completely redesigning. 
            For now, let's assume the page handles its own layout or we replace these components later. 
            To be safe and match the design exactly, I will comment them out here and include them in the page
            OR I will update them. Let's keep them and see. actually, the design has a header. 
            Ill assume the existing header component needs to be updated or replaced. */}
        {children}
      </body>
    </html>
  );
}
