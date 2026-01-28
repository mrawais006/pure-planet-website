import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Solar & Battery Quote | Victorian Rebate Calculator | Pure Planet",
  description:
    "Check your eligibility for the $1,400 Victorian solar rebate. Get a free quote for solar panels, batteries & heat pumps. Serving Melbourne & all of Victoria.",
  keywords:
    "victorian solar rebate, melbourne solar quote, battery storage victoria, solar calculator, pure planet, solar panels melbourne, home battery melbourne",
  openGraph: {
    title: "Get Your Free Solar & Battery Quote | Pure Planet",
    description:
      "Check your eligibility for the $1,400 Victorian solar rebate. Get a free personalized quote for solar panels, batteries & heat pumps.",
    type: "website",
    locale: "en_AU",
    siteName: "Pure Planet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Free Solar & Battery Quote | Pure Planet",
    description:
      "Check your eligibility for the $1,400 Victorian solar rebate. Free quote for solar, batteries & heat pumps.",
  },
};

export default function QuoteFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
