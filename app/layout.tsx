import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Macros",
  description: "Scan your meal. Know your macros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
