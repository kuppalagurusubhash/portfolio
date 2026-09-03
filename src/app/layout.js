import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Kuppala Guru Subhash | Full Stack Engineer & Software Team Lead",
  description:
    "Official portfolio of Kuppala Guru Subhash — Software Team Lead at CropNow, Full Stack Engineer (MERN, Java, DevOps, Cloud), Entrepreneur, and MCA candidate at REVA University, Bangalore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
