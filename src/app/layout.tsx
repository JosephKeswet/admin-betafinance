import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import PageWrapper from "@/components/PageWrapper";
import SidebarToggleButton from "@/components/SidebarToggleButton";
import Sidebar from "@/components/global/Sidebar";
import Header from "@/components/global/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className + 'max-h-screen'}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Toaster /> */}
          <div className="flex items-start h-screen">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
            <div className="flex flex-col w-full md:pl-[250px]">
              <Header />
              <div className="bg-gray-50 flex-1 z-30 overflow-auto p-2 md:p-6">
                {children}
              </div>
            </div>
          </div>
          {/* <PageWrapper children={children} /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
