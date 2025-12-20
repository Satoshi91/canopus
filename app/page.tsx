import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヒーローセクション */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80"
              alt="ビジネスオフィス"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              5万円から対応可能。
              <br />
              あなたの業務を効率化する
              <br />
              小さなシステム開発
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              エンジニアではない方でも、わかりやすくご相談いただけます。
              <br />
              小さなスクリプトから対応いたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                お問い合わせはこちら
              </a>
              <a
                href="/product"
                className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors border-2 border-blue-600 shadow-lg"
              >
                製品紹介（司法書士事務所向けSaaS）
              </a>
              <a
                href="/chiropractic"
                className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors border-2 border-blue-600 shadow-lg"
              >
                整骨院・整体師の方へ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            提供サービス
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* サービス1: Webページ・ホームページ制作 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&q=80"
                  alt="Webページ制作"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Webページ・ホームページ制作
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  あなたのビジネスを紹介するホームページを作成します。新規サイト制作から既存サイトのリニューアルまで対応いたします。
                </p>
              </div>
            </div>

            {/* サービス2: Excel・スプレッドシートの自動化 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80"
                  alt="Excel自動化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Excel・スプレッドシートの自動化
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  ExcelやGoogleスプレッドシートの繰り返し作業を自動化します。データ入力、集計、レポート作成の自動化で業務を効率化できます。
                </p>
              </div>
            </div>

            {/* サービス3: 業務自動化スクリプト */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80"
                  alt="業務自動化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  業務自動化スクリプト
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  PCで行う繰り返し作業を自動化するプログラムを作成します。ファイル整理、データ処理、定期作業の自動実行などが可能です。
                </p>
              </div>
            </div>

            {/* サービス4: 問い合わせフォームの作成 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80"
                  alt="問い合わせフォーム"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  問い合わせフォームの作成
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Googleフォームを使った問い合わせフォームやアンケートフォームを作成します。お客様からの問い合わせを効率的に管理できます。
                </p>
              </div>
            </div>

            {/* サービス5: オンライン決済の導入 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop&q=80"
                  alt="オンライン決済"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  オンライン決済の導入
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  クレジットカード決済を導入して、オンラインでのお支払いを受け付けられるようにします。お客様の利便性が向上します。
                </p>
              </div>
            </div>

            {/* サービス6: AIチャットボットの作成 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80"
                  alt="AIチャットボット"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  AIチャットボットの作成
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  お客様からのよくある質問に自動で回答するチャットボットを作成します。24時間対応が可能になり、業務を効率化できます。
                </p>
              </div>
            </div>

            {/* サービス7: AI活用の導入支援 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80"
                  alt="AI活用"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  AI活用の導入支援
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  お客様の業務にAIを活用した仕組みを導入するお手伝いをします。業務効率化や新しい価値の創出をサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴・強みセクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            こんな特徴があります
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                柔軟な対応
              </h3>
              <p className="text-slate-600 leading-relaxed">
                ご要望に合わせてカスタマイズいたします。既存の業務フローを尊重しながら、最適なソリューションを提案させていただきます。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                小さな規模から対応
              </h3>
              <p className="text-slate-600 leading-relaxed">
                5万円～10万円程度の小さなスクリプト作成から対応可能です。小規模なサイトでも丁寧に対応いたします。まずは小さく始めて、段階的に拡張することも可能です。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                わかりやすい説明
              </h3>
              <p className="text-slate-600 leading-relaxed">
                専門用語を使わず、丁寧にご説明いたします。技術的な知識がなくてもご安心ください。お客様が使いやすいように、わかりやすくお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 開発フローセクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            開発の流れ
          </h2>
          <div className="space-y-6">
            {/* ステップ1: ヒアリング */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                ヒアリング
              </h3>
              <p className="text-slate-600 leading-relaxed text-center">
                お客様の要望や課題をお聞きします。専門用語を使わず、わかりやすくご相談いただけます。
              </p>
            </div>

            {/* 矢印 */}
            <div className="flex justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            {/* ステップ2: 設計・見積もり */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                設計・見積もり
              </h3>
              <p className="text-slate-600 leading-relaxed text-center">
                ご要望を整理し、最適なソリューションをご提案します。お見積もりもご提示いたします。
              </p>
            </div>

            {/* 矢印 */}
            <div className="flex justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            {/* ステップ3: 開発 */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                開発
              </h3>
              <p className="text-slate-600 leading-relaxed text-center">
                お客様の業務に合わせて開発を進めます。適宜ご相談しながら進行いたします。
              </p>
            </div>

            {/* 矢印 */}
            <div className="flex justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            {/* ステップ4: 納品・フォロー */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                納品・フォロー
              </h3>
              <p className="text-slate-600 leading-relaxed text-center">
                完成したシステムをお渡しし、使い方をご説明します。アフターサポートも対応いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金について */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
            料金について
          </h2>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <p className="text-xl text-slate-700 leading-relaxed mb-4">
              5万円～10万円程度の小さなスクリプト作成から対応可能です。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              ご予算に合わせてご提案いたします。まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 代表者プロフィール・メッセージ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            代表者メッセージ
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              はじめまして、中村です。
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              多くの中小企業や個人事業主の方々は、業務効率化やシステム化に興味があっても、「大規模なシステム開発は費用がかかりそう」「技術的な話が難しそう」といった理由で、なかなか一歩を踏み出せないことがあります。
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              私は、5万円～10万円程度の小さな仕事から対応することで、お客様が気軽に始められるようにしたいと考えています。小さなスクリプト一つで業務が楽になることもあります。まずは小さく始めて、成果を実感していただくことが大切だと考えています。
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              業務の効率化を通じて、より本質的な価値を提供する時間を増やしていただきたいと考えています。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            よくある質問
          </h2>
          <div className="space-y-6">
            <details className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <summary className="text-xl font-bold text-slate-800 cursor-pointer">
                技術的な知識がなくても大丈夫ですか？
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                はい、大丈夫です。専門用語を使わず、わかりやすくご説明いたします。お客様が使いやすいように、丁寧にサポートいたします。
              </p>
            </details>
            <details className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <summary className="text-xl font-bold text-slate-800 cursor-pointer">
                どのくらいの期間で完成しますか？
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                プロジェクトの規模によって異なりますが、小さなスクリプトであれば1～2週間程度で完成することもあります。詳細はお見積もりの際にご相談ください。
              </p>
            </details>
            <details className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <summary className="text-xl font-bold text-slate-800 cursor-pointer">
                5万円～10万円でどの程度のことができますか？
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                例えば、Excelのマクロ作成、簡単なスクリプト、Googleフォームの作成、小規模なWebページ制作などが可能です。詳細はお気軽にご相談ください。
              </p>
            </details>
            <details className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <summary className="text-xl font-bold text-slate-800 cursor-pointer">
                どのようなサービスが提供できますか？
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                <a
                  href="#services"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  サービス一覧
                </a>
                をご覧ください。Webページ制作、Excel自動化、業務自動化スクリプト、問い合わせフォーム作成、オンライン決済の導入、AIチャットボットの作成など、幅広く対応しております。
              </p>
            </details>
            <details className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <summary className="text-xl font-bold text-slate-800 cursor-pointer">
                実績はありますか？
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                現在、会社設立のため実績は少ないですが、一つひとつ丁寧に対応し、お客様に喜んでいただけるサービスを提供することを大切にしています。まずは小さなことから始めて、一緒に成長していければと思います。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 問い合わせセクション */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            お問い合わせ
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-700 font-semibold mb-2"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-700 font-semibold mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-slate-700 font-semibold mb-2"
                >
                  電話番号（任意）
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-slate-700 font-semibold mb-2"
                >
                  ご希望のサービス（任意）
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="web">Webページ・ホームページ制作</option>
                  <option value="excel">Excel・スプレッドシートの自動化</option>
                  <option value="script">業務自動化スクリプト</option>
                  <option value="form">問い合わせフォームの作成</option>
                  <option value="payment">オンライン決済の導入</option>
                  <option value="chatbot">AIチャットボットの作成</option>
                  <option value="ai">AI活用の導入支援</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-slate-700 font-semibold mb-2"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">会社概要</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">会社名</h3>
              <p className="text-slate-300">ナカムラシステム開発</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">所在地</h3>
              <p className="text-slate-300">（公開準備中）</p>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400">
            <p>&copy; 2024 ナカムラシステム開発. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
