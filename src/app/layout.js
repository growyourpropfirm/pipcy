import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pipcy - Start Your Trading Challenge",
  description: "Take the Pipcy Qualification Challenge at a massive discount. Prove your trading skills and get access to live capital once you qualify.",
  icons: {
    icon: "/images/fav.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
