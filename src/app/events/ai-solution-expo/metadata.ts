import type { Metadata } from "next";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://www.bvpoptica.com";
};

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "AI Solution Expo - The AI Hackathon | BVP Optica",
  description:
    "Join AI Solution Expo, a multidisciplinary AI hackathon by R&D CELL, BVCOE X BVP Optica. Solve real-world challenges in Environment, Healthcare, and Fintech. Win prizes up to ₹5,000!",
  keywords: [
    "AI Solution Expo",
    "AI Hackathon",
    "BVP Optica",
    "BVCOE hackathon",
    "artificial intelligence competition",
    "machine learning hackathon",
    "Delhi hackathon 2026",
    "environment AI",
    "healthcare AI",
    "fintech AI",
  ],
  openGraph: {
    title: "AI Solution Expo - The AI Hackathon | BVP Optica",
    description:
      "A multidisciplinary AI hackathon solving real-world challenges in Environment, Healthcare, and Fintech. Mar 21 - Apr 14, 2026.",
    url: `${siteUrl}/events/ai-solution-expo`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/events/ai-solution-expo-og.png`,
        width: 1200,
        height: 630,
        alt: "AI Solution Expo - BVP Optica AI Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solution Expo - The AI Hackathon | BVP Optica",
    description:
      "Join AI Solution Expo by R&D CELL, BVCOE X BVP Optica. Solve challenges in Environment, Healthcare & Fintech. Win ₹5,000!",
    images: [`${siteUrl}/events/ai-solution-expo-og.png`],
  },
  alternates: {
    canonical: `${siteUrl}/events/ai-solution-expo`,
  },
};
