import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/sidebar";
import { Provider } from "@/components/provider/Provider";

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${poppins.className} `}>
          <Navbar />
          <SideBar />
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  );
}