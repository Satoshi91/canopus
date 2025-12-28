"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Twitter,
  Menu,
  X,
  Users,
  Zap,
  Lightbulb,
  FileText,
  Sparkles,
  Timer,
  Footprints,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  // お問い合わせフォームの状態管理
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    const targetElement = document.getElementById(targetId || "");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // エラーメッセージをクリア
    if (error) setError(null);
    // 成功メッセージをクリア
    if (isSuccess) setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // レスポンスがJSONかどうかを確認
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(
          "サーバーエラーが発生しました。しばらくしてから再度お試しください。"
        );
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "送信に失敗しました。");
      }

      // 成功時の処理
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        category: "",
        message: "",
      });

      // 3秒後に成功メッセージを非表示
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors"
            >
              Satoshi Nakamura
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#value"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                私の強み
              </Link>
              <Link
                href="#services"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                できること
              </Link>
              <Link
                href="#portfolio"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                技術スタック
              </Link>
              <Link
                href="#about"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                プロフィール
              </Link>
              <Link
                href="#contact"
                onClick={handleNavClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-500 transition-colors"
              aria-label="メニュー"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-200/50">
              <Link
                href="#value"
                onClick={handleNavClick}
                className="block text-gray-700 hover:text-blue-500 transition-colors"
              >
                私の強み
              </Link>
              <Link
                href="#services"
                onClick={handleNavClick}
                className="block text-gray-700 hover:text-blue-500 transition-colors"
              >
                解決策
              </Link>
              <Link
                href="#portfolio"
                onClick={handleNavClick}
                className="block text-gray-700 hover:text-blue-500 transition-colors"
              >
                技術スタック
              </Link>
              <Link
                href="#about"
                onClick={handleNavClick}
                className="block text-gray-700 hover:text-blue-500 transition-colors"
              >
                プロフィール
              </Link>
              <Link
                href="#contact"
                onClick={handleNavClick}
                className="block bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition-colors text-center"
              >
                お問い合わせ
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white"
        id="hero"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`text-center lg:text-left transition-all duration-1000 ${
                visibleSections.has("hero")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-loose">
                「どうすればいい？」を、
                <br className="hidden lg:block" />
                一緒に考える。
                <br />
                あなたの「ITに詳しい友達」になります。
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
                相談から開発まで、顔の見えるパートナーとして。Excelの自動化から最新AIの導入まで、現場に一番近い解決策をご提案します。
              </p>
              <Link
                href="#contact"
                onClick={handleNavClick}
                className="inline-block bg-blue-500 text-white px-10 py-4 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 text-lg font-medium shadow-lg hover:shadow-xl"
              >
                まずはお悩みを聞かせてください（無料相談）
              </Link>
            </div>
            <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/krakenimages-376KN_ISplE-unsplash.jpg"
                  alt="Hero image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section id="value" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-opacity duration-1000 ${
              visibleSections.has("value") ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              私の強み
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              親しみやすい、そしてプロフェッショナル。お客様と共に成長するパートナーとして。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "ITに詳しい友達になります",
                description: [
                  "「困っているけど、どうしたらいいか分からない」からご相談ください。",
                  "ITの有識者である私が直接、あなたの悩みや想いを丁寧に伺います。",
                  "あなたのIT部門として、一緒に成長していくパートナーになります。",
                ],
                bgColor: "bg-blue-50",
                iconBgColor: "bg-blue-100",
                iconColor: "text-blue-500",
              },
              {
                icon: Zap,
                title: "対話から即実行へ。圧倒的な機動力",
                description: [
                  "窓口から開発まで一人で完結。伝達のズレや無駄な待ち時間はなし。",
                  "その場でアイデアを出し、迅速に「動く仕組み」を形にします。",
                  "「今日の仕事から、早く終る。」そんな体験を届けます。",
                ],
                bgColor: "bg-indigo-50",
                iconBgColor: "bg-indigo-100",
                iconColor: "text-indigo-500",
              },
              {
                icon: Lightbulb,
                title: "「作らない解決」から「システム開発」まで",
                description: [
                  "ExcelやGoogleスプレッドシートの改善、AI(ChatGPTなど)の活用から、",
                  "小さなプログラム、本格的なシステム開発まで幅広く対応。",
                  "あなたにとっての「最短ルートの最適解」をご提案します。",
                ],
                bgColor: "bg-purple-50",
                iconBgColor: "bg-purple-100",
                iconColor: "text-purple-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`${value.bgColor} p-8 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                  visibleSections.has("value")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-14 h-14 ${value.iconBgColor} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <value.icon className={`w-7 h-7 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <div className="space-y-3">
                  {value.description.map((text, textIndex) => (
                    <p
                      key={textIndex}
                      className="text-gray-600 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 解決策セクション */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-opacity duration-1000 ${
              visibleSections.has("services") ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              できること
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              現場の困ったを、少しずつ、確実に楽に。あなたのビジネスを支える仕組みをご提案します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: FileText,
                title: "「現場のムダ」をなくす業務改善",
                description: [
                  "手書きの伝票、二重入力、重くて動かないExcel...そんな「現場の困った」を解消します。",
                  "今のやり方を尊重しながら、少しずつ、確実に楽になる仕組みをご提案します。",
                ],
                example:
                  "「毎日同じデータを複数の場所に入力していて時間がかかる」",
                bgColor: "bg-blue-50",
                iconBgColor: "bg-blue-100",
                iconColor: "text-blue-500",
              },
              {
                icon: Users,
                title: "「ITの相談役」として伴走",
                description: [
                  "「何が分からないかが、分からない」状態でも大丈夫です。",
                  "御社のIT部門のように、隣で一緒に考え、最適なツール選びから活用までサポートします。",
                ],
                example:
                  "「DXと言われても、自分の会社で何をすればいいのか見当もつかない」",
                bgColor: "bg-indigo-50",
                iconBgColor: "bg-indigo-100",
                iconColor: "text-indigo-500",
              },
              {
                icon: Sparkles,
                title: "AIで「もっと自由な時間」を",
                description: [
                  "ChatGPTなどの最新AIを使って、毎日の定型作業を自動化。",
                  "あなたにしかできない「大切な仕事」に集中できる環境を整えます。",
                ],
                example:
                  "「AIを業務に使ってみたいが、セキュリティや使い方が不安」",
                bgColor: "bg-purple-50",
                iconBgColor: "bg-purple-100",
                iconColor: "text-purple-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} p-10 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  visibleSections.has("services")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 ${service.iconBgColor} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className={`w-9 h-9 ${service.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                  {service.title}
                </h3>
                <div className="space-y-4 mb-6">
                  {service.description.map((text, textIndex) => (
                    <p
                      key={textIndex}
                      className="text-gray-700 leading-relaxed text-base"
                    >
                      {text}
                    </p>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">
                    例えば、こんなお悩みに：
                  </p>
                  <p className="text-sm text-gray-700 mt-2 italic">
                    {service.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Tech Section - 技術スタックセクション */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-opacity duration-1000 ${
              visibleSections.has("portfolio") ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              技術スタック
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              デザインの美しさ以上に、お問い合わせ後の自動フローなど、ビジネスを動かすロジックの実装を重視しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Front-end",
                technologies: [
                  "React (Next.js)",
                  "Vue.js (Nuxt.js)",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Back-end/Cloud",
                technologies: ["Firebase", "Google Cloud Platform (GCP)"],
              },
              {
                category: "AI/Automation",
                technologies: [
                  "Dify (AIワークフロー構築)",
                  "RAG実装 (Pinecone)",
                  "OpenAI API",
                ],
              },
              {
                category: "Office/Workflow",
                technologies: [
                  "Google Apps Script (GAS)",
                  "Google Workspace連携",
                  "Excelマクロ刷新",
                ],
              },
            ].map((stack, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 ${
                  visibleSections.has("portfolio")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-opacity duration-1000 ${
              visibleSections.has("about") ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              プロフィール
            </h2>
          </div>

          {/* メッセージ：鹿児島への想い */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-blue-50 rounded-2xl p-8 sm:p-10 border border-blue-100">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                バリバリ働きたいという向上心を胸に東京へ進出しましたが、離れてみて改めて鹿児島の自然の豊かな魅力や人の温かさに感銘を受け、帰郷を決意しました。大好きなこの地で、ITの力を使って地元の皆様の力になりたいと考えています。
              </p>
            </div>
          </div>

          {/* 経歴タイムライン */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              経歴
            </h3>
            <div className="relative">
              {/* タイムラインの縦線 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden md:block"></div>

              <div className="space-y-8">
                {[
                  {
                    icon: GraduationCap,
                    year: "大学卒業",
                    title: "鹿児島大学工学部 情報生体システム工学科 卒業",
                    color: "bg-blue-100",
                    iconColor: "text-blue-500",
                  },
                  {
                    icon: GraduationCap,
                    year: "大学院修了",
                    title:
                      "鹿児島大学大学院 理工学研究科 修了（情報生体システム工学専攻）",
                    color: "bg-blue-100",
                    iconColor: "text-blue-500",
                  },
                  {
                    icon: Briefcase,
                    year: "東京での挑戦",
                    title: "東京のIT企業でのシステム開発（挑戦の時期）",
                    color: "bg-indigo-100",
                    iconColor: "text-indigo-500",
                  },
                  {
                    icon: HomeIcon,
                    year: "帰郷",
                    title: "鹿児島へ帰郷。地元のIT企業にてエンジニアとして従事",
                    color: "bg-purple-100",
                    iconColor: "text-purple-500",
                  },
                  {
                    icon: Briefcase,
                    year: "独立",
                    title: "フリーランスエンジニアとして独立",
                    color: "bg-indigo-100",
                    iconColor: "text-indigo-500",
                  },
                  {
                    icon: Briefcase,
                    year: "起業",
                    title: "ITコンサルタント兼システムエンジニアとして起業",
                    color: "bg-indigo-100",
                    iconColor: "text-indigo-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-6 transition-all duration-1000 ${
                      visibleSections.has("about")
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* タイムラインドット */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-md hidden md:flex`}
                      >
                        <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                      </div>
                      <div
                        className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-md md:hidden`}
                      >
                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                    </div>

                    {/* コンテンツ */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm font-semibold text-blue-600 mb-2">
                        {item.year}
                      </div>
                      <div className="text-gray-800 font-medium leading-relaxed">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 完遂力の証明：マラソン実績 */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              完遂力の証明
            </h3>
            <div
              className={`mb-8 text-center text-gray-700 leading-relaxed transition-opacity duration-1000 ${
                visibleSections.has("about") ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg">
                趣味はテニスとマラソン。目標に向かって一歩ずつ進むのが好きです。ビジネスもマラソンと同じ。ゴールまで粘り強く伴走します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  event: "かごしまマラソン",
                  date: "2025.3",
                  time: "4時間46分18秒",
                  note: "完走 5時間切り達成",
                  icon: Footprints,
                },
                {
                  event: "ランニング桜島",
                  date: "2025.12",
                  time: "1時間59分44秒",
                  note: "ハーフ 2時間切り達成",
                  icon: Timer,
                },
                {
                  event: "かごしまマラソン",
                  date: "2026.3",
                  time: "出場予定",
                  note: "自己ベスト更新へ挑戦中",
                  icon: Footprints,
                },
              ].map((record, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                    visibleSections.has("about")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <record.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        {record.event}
                      </div>
                      <div className="text-sm text-gray-600">{record.date}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {record.time}
                  </div>
                  <div className="text-sm text-gray-600">{record.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 保有資格 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              保有資格
            </h3>
            <div
              className={`flex flex-wrap gap-3 justify-center transition-opacity duration-1000 ${
                visibleSections.has("about") ? "opacity-100" : "opacity-0"
              }`}
            >
              {[
                "基本情報技術者",
                "応用情報技術者",
                "日商簿記3級",
                "TOEIC 665",
              ].map((cert, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 font-medium hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div
            className={`text-center mb-12 transition-opacity duration-1000 ${
              visibleSections.has("contact") ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ご相談やお見積もりは、お気軽にお問い合わせください。
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-white p-8 rounded-2xl shadow-lg space-y-6 transition-opacity duration-1000 ${
              visibleSections.has("contact") ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* 成功メッセージ */}
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-2xl">
                <p className="font-medium">
                  お問い合わせありがとうございます。送信が完了しました。
                </p>
              </div>
            )}

            {/* エラーメッセージ */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-2xl">
                <p className="font-medium">{error}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                お名前
                <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="山田 太郎"
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                メールアドレス
                <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="example@email.com"
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium mb-2"
              >
                お問い合わせカテゴリー
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                disabled={isLoading}
              >
                <option value="">選択してください</option>
                <option value="業務改善のご相談">業務改善のご相談</option>
                <option value="IT導入のご相談">IT導入のご相談</option>
                <option value="AI活用のご相談">AI活用のご相談</option>
                <option value="システム開発のご依頼">
                  システム開発のご依頼
                </option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="お問い合わせ内容をご記入ください"
                disabled={isLoading}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "送信中..." : "送信する"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Satoshi Nakamura. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <Link
                href="/privacy"
                className="text-sm hover:text-white transition-colors"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
