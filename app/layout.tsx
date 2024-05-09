import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "./components/Header";
import StoreProvider from "./StoreProvider";
import Basket from "./components/Basket";
import "./globals.css";
import FiltersSections from "./containers/FiltersSections";

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
      <StoreProvider>
        <AntdRegistry>
          <body className={inter.className}>
            <Header />
            <main>
              <FiltersSections />
              {children}
              <Basket />
            </main>
          </body>
        </AntdRegistry>
      </StoreProvider>
    </html>
  );
}
