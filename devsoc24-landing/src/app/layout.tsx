import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "DEVSOC'24",
  description:
    "DEVSOC'24 is CodeChef-VIT's annual flagship event hoping to empower young minds by bringing enthusiastic technocrats and thinkers under one roof.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  ogImage: {
    url: "https://example.com/path/to/your/image.jpg",
    alt: "DEVSOC'24 Image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
