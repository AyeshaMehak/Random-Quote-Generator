import { Alkatra } from "next/font/google";
import "./globals.css";

const alkatra = Alkatra({ subsets: ["latin"], weight:["400"], variable: "--Alkatra" });

export const metadata = {
  title: "Quote Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alkatra.className}>{children}</body>
    </html>
  );
}
