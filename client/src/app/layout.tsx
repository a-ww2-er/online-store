import { Toaster } from "@/components/ui/toaster";
import { ReduxProvider } from "@/redux/provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "One Faster",
  description: "An online store for software license codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}> 
      <ReduxProvider>
      <Toaster />
        {children}
        </ReduxProvider>
        </body>
    </html>
  );
}
