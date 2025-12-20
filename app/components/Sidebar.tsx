"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* モバイル用ハンバーガーメニューボタン */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors"
        aria-label="メニューを開く"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* モバイル用オーバーレイ */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900 bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 左サイドバー */}
      <aside
        className={`w-64 bg-slate-800 text-white flex-shrink-0 fixed h-full left-0 top-0 overflow-y-auto z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <h1 className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                ナカムラシステム開発
              </h1>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-blue-300 transition-colors"
              aria-label="メニューを閉じる"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="space-y-2">
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              ホーム
            </Link>
            <Link
              href="/product"
              onClick={() => setSidebarOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              製品紹介
            </Link>
            <Link
              href="/chiropractic"
              onClick={() => setSidebarOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              整骨院・整体師の方へ
            </Link>
            <Link
              href="/#services"
              onClick={() => setSidebarOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              提供サービス
            </Link>
            <Link
              href="/#contact"
              onClick={() => setSidebarOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

