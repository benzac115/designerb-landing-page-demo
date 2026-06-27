import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Designer B — Creative Portfolio",
  description: "Creative Design, UI/UX, and Interaction Design Portfolio of Designer B. Crafted in Black, White, and Blue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
