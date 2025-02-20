import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
// import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayesh Puri Goswami's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={["dark", "light"]}
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
