import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Urban Bites",
  description:
    "A food delivery service that brings your favorite meals to your doorstep.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-full flex flex-col bg-white dark:bg-neutral-900 dark:text-white ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
