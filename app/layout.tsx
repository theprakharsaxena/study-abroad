import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsApp from "./components/WhatsApp";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizonwings Overseas Education",
  description: "Where Your International Academic Aspirations Take Wing!",
  icons: {
    icon: ["/images/favicon.ico?v=1"],
    apple: ["/images/apple-touch-icon.png?v=1"],
    shortcut: ["/images/apple-touch-icon.png"],
  },
  manifest: "/images/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <WhatsApp />
        {children}
      </body>
    </html>
  );
}
