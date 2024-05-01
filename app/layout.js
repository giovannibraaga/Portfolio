import { leagueSpartan } from "@/app/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Giovanni Bernardo Portfolio",
  description: "Giovanni's portfolio website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logoWhite.ico",
        href: "/images/logoWhite.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon.ico",
        href: "/images/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>{children}</body>
    </html>
  );
}
