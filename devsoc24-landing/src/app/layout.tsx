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
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="https://i.imgur.com/50QRAQ9.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DEVSOC'24" />
        <meta property="og:url" content={""} />
        <meta property="og:site_name" content={"DEVSOC'24"} />
      </head>
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
