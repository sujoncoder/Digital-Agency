import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from '../../context/ThemeContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Products",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <main className="w-3/4 mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
