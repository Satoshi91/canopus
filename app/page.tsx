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
              中村 聡志
            </h1>
          </div>
        </div>
      </section>

      {/* 代表者プロフィール・メッセージ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            自己紹介
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            {/* 経歴 */}
            <div className="mb-8 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">経歴</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    学歴
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                    <li>鹿児島大学 工学部 情報生体システム工学科卒業</li>
                    <li>
                      鹿児島大学大学院 理工学研究科 情報生体システム工学専攻卒業
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    職歴
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                    <li>新卒で東京のIT会社に就職</li>
                    <li>その後、鹿児島に戻ってIT会社に就職</li>
                    <li>
                      現在はフリーランスエンジニアとして某社に準委任契約で参加
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 趣味 */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">趣味</h3>
              <div className="space-y-3 text-slate-700">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-1">
                    マラソン
                  </h4>
                  <p className="ml-4">
                    直近では2025年12月に鹿児島県のランニング桜島というイベントで、ハーフマラソンを1時間59分で走りました。
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-1">
                    テニス
                  </h4>
                  <p className="ml-4">週に1回テニススクールに通っています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 text-center text-slate-400">
            <p>&copy; 2025 Sasothi Nakamura. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
