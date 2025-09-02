import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VadivelVerse",
  description: "my VadivelVerse Engineering portfolio website .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="shortcut icon"
        href="https://sdmntpreastus.oaiusercontent.com/files/00000000-99f8-61f9-ae13-1c82f83b30ee/raw?se=2025-09-01T08%3A05%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=1e08b48e-3a4b-5df0-b0de-eddbe3560c10&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-31T17%3A35%3A56Z&ske=2025-09-01T17%3A35%3A56Z&sks=b&skv=2024-08-04&sig=VvlWKXiz8lKT8cY04nABPnSvR6ST3Cbdqtb2Yfz3TVc%3D"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
