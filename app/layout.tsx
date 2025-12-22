import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ナカムラ",
  description: "中小企業・個人事業主向けのサービス。Webページ制作、Excel自動化、業務効率化スクリプトなど、幅広く対応しております。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          {/* メインコンテンツエリア */}
          <main className="flex-1 lg:ml-64 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
