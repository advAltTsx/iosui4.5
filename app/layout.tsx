import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhyudaya",
  description: "@advwastaken",
  icons: {
    icon: '/logo.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div vaul-drawer-wrapper="" className="bg-white min-h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
