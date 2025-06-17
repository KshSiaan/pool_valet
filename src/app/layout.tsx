import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "variable", // enables all weights
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "PoolValet",
  description:
    "Compare quotes from trusted pros for cleaning, repairs, or new pool builds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto antialiased`}>
        {children}
      </body>
    </html>
  );
}
