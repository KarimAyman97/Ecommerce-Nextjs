import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./_store/provider";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Made and Deployed By Karim Ayman",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className}`}
        // style={{ backgroundColor: "#f2f3ed" }}
        dir="ltr"
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
