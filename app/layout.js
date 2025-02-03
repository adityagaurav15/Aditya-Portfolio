import { Geist, Geist_Mono, Outfit, Ovo, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Aditya's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.className} ${ovo.className} ${poppins.className} antialiased 
        overflow-x-hidden
        bg-gradient-to-r from-blue-50 via-red-50 to-yellow-50
        dark:bg-gradient-to-r dark:from-blue-500 dark:via-red-500 dark:to-yellow-500 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
