import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engineer Vector — Level Up Every Day",
  description: "Daily engineering content, MCQs, memes, and interview prep for software engineers, students, and developers.",
  keywords: ["Software Engineering", "MCQs", "Interview Prep", "DSA", "System Design", "Telegram Channel", "Engineer Vector"],
  authors: [{ name: "Engineer Vector Team" }],
  openGraph: {
    title: "Engineer Vector — Level Up Every Day",
    description: "Daily engineering content, MCQs, memes, and interview prep for software engineers.",
    url: "https://t.me/engineer_vector",
    siteName: "Engineer Vector",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineer Vector — Level Up Every Day",
    description: "Daily engineering content, MCQs, memes, and interview prep for software engineers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white selection:bg-[#229ED9] selection:text-black">
        {children}
      </body>
    </html>
  );
}
