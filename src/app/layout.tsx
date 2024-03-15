import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={openSans.className + " root"}>
        {" "}
        <main
          style={{ backgroundImage: "url(/images/albums/AZ5Q7385.jpg)" }}
          className="relative flex min-h-screen flex-col items-center justify-between"
        >
          <div className="backdrop-blur-[50px] bg-white/50 absolute top-0 left-0 bottom-0 right-0 z-0"></div>
          <Header />
          <div className="flex-1 z-10 container">{children}</div>
        </main>
      </body>
    </html>
  );
}