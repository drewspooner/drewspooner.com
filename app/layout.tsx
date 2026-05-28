import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drew Spooner — Software Engineer",
  description:
    "Software Engineer at the New York Knicks / MSG Sports Corp, building products for basketball operations and player development. Based in New York, NY.",
  metadataBase: new URL("https://drewspooner.com"),
  openGraph: {
    title: "Drew Spooner — Software Engineer",
    description:
      "Software Engineer at the New York Knicks / MSG Sports Corp, building products for basketball operations and player development. Based in New York, NY.",
    url: "https://drewspooner.com",
    siteName: "Drew Spooner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 628,
        alt: "Drew Spooner — Software Engineer at the New York Knicks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Spooner — Software Engineer",
    description:
      "Software Engineer at the New York Knicks / MSG Sports Corp, building products for basketball operations and player development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
