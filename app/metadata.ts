import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Key Foundation - Unlocking Christ's Compassion",
  description:
    "Inspiring and transforming lives through Christ's compassion, creating a global community built on faith, love, and service.",
  keywords: [
    "Golden Key Foundation",
    "charity",
    "Christian charity",
    "community service",
    "faith-based organization",
    "volunteer",
    "donate",
  ],
  authors: [{ name: "Golden Key Foundation" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://goldenkeyfoundation.org/",
    title: "Golden Key Foundation - Unlocking Christ's Compassion",
    description:
      "Inspiring and transforming lives through Christ's compassion, creating a global community built on faith, love, and service.",
    images: [
      {
        url: "/app/logo.png",
        width: 1200,
        height: 630,
        alt: "Golden Key Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Key Foundation - Unlocking Christ's Compassion",
    description:
      "Inspiring and transforming lives through Christ's compassion, creating a global community built on faith, love, and service.",
    images: ["/app/logo.png"],
  },
  alternates: {
    canonical: "https://goldenkeyfoundation.org/",
  },
};
