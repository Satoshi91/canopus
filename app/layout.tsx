import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Satoshi Nakamura",
  description:
    "ITコンサルタント兼システムエンジニアとして、お客様のビジネスを技術でサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAiChatEnabled = process.env.ENABLE_AI_CHAT === "true";

  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased bg-gray-50`}>
        {children}
        {isAiChatEnabled && <ChatWidget />}
      </body>
    </html>
  );
}
