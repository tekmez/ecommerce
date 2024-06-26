import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "./components/Header";
// import Basket from "./components/Basket";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Next.js Template",
  description: "Ecommerce template for Next.js",
};

const Basket = dynamic(() => import("./components/Basket"), {
  ssr: false,
});
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
              {children}
              <Basket />
            </main>
          </body>
        </AntdRegistry>
      </StoreProvider>
    </html>
  );
}
