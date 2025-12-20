import Image from "next/image";
import Link from "next/link";

export default function ChiropracticPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* セクション1: ファーストビュー（FV） */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              施術に集中できる環境を、
              <br />
              ITの力で共創しませんか？
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              施術だけに集中できる毎日へ。
              <br />
              AIとITを活用し、事務作業を3割減らし、売上を最大化する
              <br />
              オーダーメイドの仕組みをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                無料の業務効率化診断を受ける
              </a>
              <a
                href="#solutions"
                className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors border-2 border-blue-600 shadow-lg"
              >
                解決策を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2: 課題の列挙（アジテーション） */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            こんな悩み、ありませんか？
          </h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                施術中に電話が鳴るたび、集中が途切れる
              </h3>
              <p className="text-slate-700 leading-relaxed">
                患者さんに最善の施術を提供したいのに、予約の電話対応で中断を余儀なくされる。現在の患者さんの満足度が下がるだけでなく、施術の質も低下してしまう。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                事務作業に追われ、施術に集中できない
              </h3>
              <p className="text-slate-700 leading-relaxed">
                紙のカルテ作成、レセプト作成、予約管理...。本来の施術業務以外の作業が膨大で、技術を磨く時間も、患者さんと向き合う時間も奪われている。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                新規患者の獲得が難しい。価格競争に巻き込まれている
              </h3>
              <p className="text-slate-700 leading-relaxed">
                看板を掲げれば患者が来る時代は終わった。立地や価格でしか差別化できず、利益率が低下している。自費診療への移行も進まない。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                リピート率が低く、患者さんとの関係が続かない
              </h3>
              <p className="text-slate-700 leading-relaxed">
                施術後は「紙を渡して終わり」。患者さんとの接点が途切れ、次回来院まで時間が空いてしまう。結果として、リピート率が上がらない。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                IT導入に不安がある。コストやセキュリティが心配
              </h3>
              <p className="text-slate-700 leading-relaxed">
                患者の個人情報を扱う現場として、セキュリティへの不安がある。また、ITリテラシーに自信がなく、学習時間も取れない。
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-slate-800 mb-4">
              ITとAIを活用して、これらの課題を根本から解決しましょう
            </p>
            <p className="text-lg text-slate-600">
              あなたの院に最適なソリューションを、一緒に考えさせていただきます。
            </p>
          </div>
        </div>
      </section>

      {/* セクション3: ITによる「劇的変化」の提示 */}
      <section
        id="solutions"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">
            ITがもたらす「劇的変化」
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            専門用語は一切使わず、あなたの日常を変える具体的な解決策をご提案します
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ソリューション1: 予約の自動化 */}
            <div className="bg-white rounded-lg overflow-hidden border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80"
                  alt="予約の自動化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  予約の自動化
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong className="text-blue-600">
                    「寝ている間も、施術中も。あなたの代わりに24時間、予約を受け付けます」
                  </strong>
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>24時間365日の予約受付で、取りこぼしをゼロに</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>自動リマインダーで無断キャンセルを劇的に減少</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      複数の予約プラットフォームを一元管理。ダブルブッキングのリスクを排除
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ソリューション2: AIカルテの魔法 */}
            <div className="bg-white rounded-lg overflow-hidden border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop&q=80"
                  alt="AIカルテ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  AIカルテの魔法
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong className="text-blue-600">
                    「会話を録音するだけ。施術が終わる頃には、カルテのドラフトが完成しています」
                  </strong>
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>施術中の会話から自動的にカルテのドラフトを作成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      手書きの時間を削減し、施術に集中できる時間を確保
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      記録の質が向上し、患者さんの状態をより正確に把握
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ソリューション3: LINEでのファン化 */}
            <div className="bg-white rounded-lg overflow-hidden border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&q=80"
                  alt="LINEフォローアップ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  LINEでのファン化
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong className="text-blue-600">
                    「患者さんが帰宅した後も、AIがストレッチ法をアドバイス。次の予約が待ち遠しくなる関係を築きます」
                  </strong>
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      患者ごとの症状に合わせたストレッチ動画を自動提案
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>日常生活での注意点をAIが自動生成し、LINEで送信</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      「紙を渡して終わり」から「パーソナルな健康管理パートナー」へ
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ソリューション4: MEO・集客自動化 */}
            <div className="bg-white rounded-lg overflow-hidden border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80"
                  alt="集客自動化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  MEO・集客自動化
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong className="text-blue-600">
                    「Google
                    Mapsでの検索順位を最適化し、新規集客を安定化させます」
                  </strong>
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Google Maps最適化（MEO）で地域検索での露出を向上
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>口コミ分析ツールで顧客満足度の傾向を把握</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>新規獲得コストを削減し、価格競争から脱却</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4: フリーランスだからこそ提供できる独自価値 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">
            フリーランスだからこそ提供できる独自価値
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            大手パッケージシステムにはない、柔軟性と密な伴走支援
          </p>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-300">
                    <th className="text-left py-4 px-4 font-bold text-slate-800">
                      比較項目
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-slate-800">
                      汎用パッケージシステム
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600">
                      フリーランスによるオーダーメイド
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-200">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-700">
                      柔軟性
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-center">
                      システムに運用を合わせる必要がある
                    </td>
                    <td className="py-4 px-4 text-slate-700 text-center bg-blue-100">
                      <strong>院の独自のフローにシステムを合わせる</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-700">
                      サポート
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-center">
                      メール・チャットのみの定型対応
                    </td>
                    <td className="py-4 px-4 text-slate-700 text-center bg-blue-100">
                      <strong>対面や電話を含む、密な伴走支援</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-700">
                      コスト
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-center">
                      月額費用が永続的に発生する
                    </td>
                    <td className="py-4 px-4 text-slate-700 text-center bg-blue-100">
                      <strong>必要な機能のみを開発し、資産化できる</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-700">
                      拡張性
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-center">
                      独自の機能追加はほぼ不可能
                    </td>
                    <td className="py-4 px-4 text-slate-700 text-center bg-blue-100">
                      <strong>AI連携や新サービスへの対応が自由自在</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-700">
                      関係性
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-center">
                      匿名のサポート担当者
                    </td>
                    <td className="py-4 px-4 text-slate-700 text-center bg-blue-100">
                      <strong>
                        顔の見える安心感。現場の細かいニュアンスを汲み取る
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-slate-700 leading-relaxed">
              特に、お知り合いという関係を活かした「顔の見える安心感」と、現場の細かいニュアンスを汲み取ったカスタマイズは、
              <br />
              大手企業には真似できない最大の差別化要因となります。
            </p>
          </div>
        </div>
      </section>

      {/* セクション5: 信頼の構築 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            安心・安全への取り組み
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                セキュリティ対策
              </h3>
              <p className="text-slate-700 leading-relaxed">
                患者の個人情報を扱う現場として、セキュリティには最大限の注意を払います。データの暗号化、アクセス制御、定期的なセキュリティ監査など、医療類似行為を行う現場に適した対策を実装します。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                将来的な拡張性
              </h3>
              <p className="text-slate-700 leading-relaxed">
                AI技術は日々進化しています。将来的に新しいAI機能やサービスが登場しても、柔軟に対応できる設計で構築します。一度導入したシステムが陳腐化することなく、長く使える資産として価値を提供します。
              </p>
            </div>
          </div>

          {/* ROIシミュレーション */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
              投資対効果（ROI）のシミュレーション
            </h3>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  従来型経営（アナログ中心）
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    • 新規獲得コスト（CPA）: 高（チラシ・看板等の反応率低下）
                  </li>
                  <li>• リピート率: 施術者の記憶や勘に依存</li>
                  <li>• 事務作業時間比率: 高（手書きカルテ・電話対応）</li>
                  <li>• 患者一人当たり単価: 保険診療中心で頭打ち</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  DX推進型経営（IT活用）
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• 新規獲得コスト（CPA）: 低（MEO・SNS等の最適化）</li>
                  <li>• リピート率: データに基づく適切なリマインド</li>
                  <li>• 事務作業時間比率: 低（AI自動カルテ・Web予約）</li>
                  <li>
                    • 患者一人当たり単価: 自費メニューの視覚化・高付加価値化
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-slate-700 leading-relaxed">
                IT投資は「経費」ではなく、「売上を作るための投資」です。
                <br />
                事務作業時間の削減により、施術に集中できる時間が増え、患者満足度が向上します。
                <br />
                その結果、リピート率と単価の向上により、売上を最大化できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション6: 導入の流れ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            導入の流れ
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  無料診断・ヒアリング
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  まずは、現在の業務フローや課題を詳しくお聞きします。ITリテラシーがなくても大丈夫。専門用語を使わず、わかりやすくご説明します。あなたの院に最適なソリューションを一緒に考えます。
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  オーダーメイド開発
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  ヒアリング結果を基に、あなたの院の独自のフローに合わせたシステムを開発します。既存のパッケージシステムとは異なり、あなたの業務に合わせてカスタマイズします。開発の過程でも、随時ご相談いただけます。
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  運用サポート
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  システム導入後も、密にサポートします。使い方の質問から、機能追加のご要望まで、対面や電話で対応します。システムは「導入して終わり」ではなく、あなたの院と共に成長していくものです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7: お問い合わせ */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
            まずは、無料の業務効率化診断から
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            あなたの院の課題を一緒に整理し、最適な解決策をご提案します。
            <br />
            技術的な知識がなくても、お気軽にご相談ください。
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
              className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors border-2 border-blue-600 shadow-lg"
            >
              トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
