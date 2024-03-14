import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "DEVSOC'24",
  description:
    "Join us in the Anna Auditorium on 17th March for DEVSOC-24! Find out more at our website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  ogImage: {
    url: "/assets/images/ogImage.png",
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
