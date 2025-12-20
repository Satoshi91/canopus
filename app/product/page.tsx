import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヒーローセクション */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&q=80"
              alt="司法書士事務所"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              司法書士事務所向け
              <br />
              SaaSアプリケーション
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              事務所の業務を効率化する3つの機能を備えた
              <br />
              クラウド型の管理システム
            </p>
          </div>
        </div>
      </section>

      {/* 機能紹介セクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            主な機能
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 機能1: 案件管理 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80"
                  alt="案件管理"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  案件管理
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  案件の進捗状況を一元的に管理できます。タスクの整理と効率的な業務進行をサポートします。
                </p>
              </div>
            </div>

            {/* 機能2: 顧客管理 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80"
                  alt="顧客管理"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  顧客管理
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  顧客情報を安全に管理し、案件との紐付けが簡単に行えます。顧客履歴の確認も容易です。
                </p>
              </div>
            </div>

            {/* 機能3: 必要書類管理 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&q=80"
                  alt="必要書類管理"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  必要書類管理
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  必要な書類を案件ごとに整理して管理できます。書類の所在確認が簡単になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            料金
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 基本料金 */}
            <div className="bg-white rounded-lg p-8 border border-blue-100 shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                月額料金
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">3,000円</span>
                <span className="text-slate-600 ml-2">/ 1アカウント</span>
              </div>
              <p className="text-slate-600">
                基本的な3つの機能が利用可能です。
              </p>
            </div>

            {/* 機能追加 */}
            <div className="bg-white rounded-lg p-8 border border-blue-100 shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                機能追加開発
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">5万円～</span>
                <span className="text-slate-600 ml-2">/ 1口</span>
              </div>
              <p className="text-slate-600">
                ご要望に合わせた機能を追加開発いたします。1口5万円～10万円程度から対応可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
            お問い合わせ
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            ご質問やお試し利用に関するお問い合わせは、
            <br />
            お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              お問い合わせフォームへ
            </Link>
            <Link
              href="/"
              className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors border-2 border-blue-600"
            >
              トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

