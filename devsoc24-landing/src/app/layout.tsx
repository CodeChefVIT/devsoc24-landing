import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph tags */}
        <title>DEVSOC&apos;24</title>
        <meta property="og:title" content={"DEVSOC'24"} />
        <meta
          property="og:description"
          content={
            "DEVSOC-24 is here! Join us in the Anna Auditorium on 17th March for an intense coding experience, fun activities, and insightful speaker sessions. Find out more at our website!"
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"/thumbnail.png"} />
        <meta property="og:url" content={""} />
        <meta property="og:site_name" content={"DEVSOC'24"} />
      </head>
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
