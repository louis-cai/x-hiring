import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";

import { cn } from "@/lib/utils";
import Head from "next/head";
import { type Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://x-hiring.hehehai.cn"),
  title: {
    default: "X-Hiring",
    template: "%s | X-Hiring",
  },
  description: "每日最新招聘信息， 使用 Google AI 提取摘要",
  keywords: [
    "招聘",
    "程序员招聘",
    "招聘信息",
    "远程工作",
    "远程开发",
    "兼职开发",
    "远程兼职",
  ],
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Regular.min.css"
        />
      </Head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
      <GoogleAnalytics gaId="G-TZXQXXK3C2" />
    </html>
  );
}
