import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import { SonnerProvider } from "@/components/providers/sonner-provider";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
export const metadata: Metadata = {
  title: "Job Portal",
  description: "Job Portal Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* {process.env.NODE_ENV === "development" && (
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      )} */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            <div className="">{children}</div>
            <Footer />
            <SonnerProvider />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
