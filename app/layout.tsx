import type { Metadata } from "next";
import { Fonts } from "@/theme/font";
import "@/theme/css/globals.css";

export const metadata: Metadata = {
  title: "Joseph Malicke, Principal Software Engineer",
  description: "Building resilient platforms and leading teams that ship fast without breaking what matters. Passionate about modern product architecture, clear mentorship, and thoughtful engineering culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fonts.GeistSans} ${Fonts.GeistMono} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
