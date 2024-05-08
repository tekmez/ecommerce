import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Next.js Template",
  description: "Ecommerce template for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <body className={inter.className}>
          <Header />
          <main>
            {children}
            <div id="basket"></div>
          </main>

          <footer>Created by Tuncay Ekmez</footer>
        </body>
      </AntdRegistry>
    </html>
  );
}
