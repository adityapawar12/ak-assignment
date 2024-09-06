import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "./_components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Spacex Assignment Assignment",
  description: "Spacex Assignment Assignment",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Spacex Assignment Assignment",
    description: "Spacex Assignment Assignment",
  },
  twitter: {
    title: "Spacex Assignment Assignment",
    description: "Spacex Assignment Assignment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        <ToastContainer />

        {children}
      </body>
    </html>
  );
}
