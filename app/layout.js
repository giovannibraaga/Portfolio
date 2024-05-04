import { leagueSpartan } from "@/app/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Giovanni Bernardo Portfolio",
  description: "Giovanni's portfolio website",
  icons: {
    icon: [
      {
        url: "/images/logoWhite.ico",
        href: "/images/logoWhite.ico",
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
