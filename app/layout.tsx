import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAQGO | Streetwear & High Fashion",
  description: "PAQGO Streetwear Official. Exclusive drops, limited collections, and modern street fashion. Enter your email for early access.",
  keywords: ["PAQGO", "streetwear", "street fashion", "clothing brand", "limited drop", "fashion"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PAQGO | Streetwear & High Fashion",
    description: "Exclusive drops & limited collections.",
    url: "https://paqgo.world",
    siteName: "PAQGO",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}