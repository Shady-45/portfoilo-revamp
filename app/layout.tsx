import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose the weights you need
  variable: '--font-poppins', // optional if using CSS variables
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Chalat Rahul",
  description: "Lets Go!...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={`antialiased`}
      >
        <div className="p-2 md:py-10 md:px-10">
        <Navbar />
        {children}
        <Footer/>
        </div>
        
      </body>
    </html>
  );
}
