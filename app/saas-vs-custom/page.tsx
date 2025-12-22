export default function SaasVsCustom() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヒーローセクション */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              行政書士事務所向けシステム開発
              <br />
              協働のご提案
            </h1>
          </div>
        </div>
      </section>

      {/* 開発モデルの変更について */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            このページで伝えたいこと
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            一般的に中小企業で検討される「受託開発」ではなく、
            <strong className="text-blue-600">「SaaS（サース）型開発」</strong>
            というモデルで進めたいと考えています。
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            そのため、私と貴事務所のあいだで短期的・一時的なものではなく、長期的な関係を築かせていただきたいと考えています。
          </p>
        </div>
      </section>

      {/* SaaSについての説明 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
            SaaS（サース）とは？
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              SaaS(Software as a
              Service)というと聞きなじみのない言葉かもしれませんが、一般的に広く使われているウェブアプリケーションというのはこの提供形態をとっております。
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              ソフトウェアを買い切りではなく、
              <strong className="text-blue-600">
                月額課金などで使っている期間に対しての料金を払うシステムやアプリケーション
              </strong>
              のことを指します。
            </p>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                SaaSの特徴
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 月額課金型の契約
                  </p>
                  <p className="text-sm text-slate-700">
                    買い切りではなく、使っている期間に対して料金を支払う形が一般的です。初期投資を抑えながら、必要な期間だけ利用できます。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 常に最新版が使える
                  </p>
                  <p className="text-sm text-slate-700">
                    アップデートや機能追加が自動で行われ、常に最新の機能やセキュリティパッチが適用された状態で利用できます。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • クラウドベースでどこからでもアクセス可能
                  </p>
                  <p className="text-sm text-slate-700">
                    インストール不要で、ブラウザやアプリからインターネット経由で利用できます。場所を選ばず、複数のデバイスからアクセス可能です。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 開発者が運用・保守を担当
                  </p>
                  <p className="text-sm text-slate-700">
                    システムの運用や保守、バックアップなどは開発者側が担当するため、顧客は運用の負担なく利用できます。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 継続的な改善が可能
                  </p>
                  <p className="text-sm text-slate-700">
                    ユーザーのフィードバックに基づいて、機能追加や改善が継続的に行われます。要件の変更にも柔軟に対応できます。
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {/* 誰もが知っている有名なSaaS */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  誰もが知っている有名なSaaS
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      Microsoft 365 / Google Workspace
                    </p>
                    <p className="text-sm text-slate-700">
                      Word、Excel、Gmailなど。昔はソフトを買ってPCに入れていましたが、今は月額料金で最新版を使います。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">Zoom</p>
                    <p className="text-sm text-slate-700">
                      Web会議。これもブラウザやアプリから常に最新の通信機能を利用するSaaSの一種です。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      LINE WORKS / Slack
                    </p>
                    <p className="text-sm text-slate-700">
                      ビジネス用のチャットツール。
                    </p>
                  </div>
                </div>
              </div>

              {/* 事務作業・バックオフィス系のSaaS */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  事務作業・バックオフィス系のSaaS
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">
                      freee会計 / マネーフォワード クラウド
                    </p>
                    <p className="text-sm text-slate-700 mb-2"></p>
                    <p className="text-sm text-slate-700">
                      昔の会計ソフトはPCにインストールして自分でバックアップを取る必要がありましたが、これらはネット上で完結し、法改正にも自動で対応します。私の作るツールも、この『常に最新で、どこからでも使える』形を目指しています」
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">SmartHR</p>
                    <p className="text-sm text-slate-700 mb-2">
                      入社手続きや雇用契約をペーパーレス化。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 受託開発についての説明 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
            受託開発とは？
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              受託開発とは、
              <strong className="text-blue-600">
                顧客からの要望を聞いて、それを解決するためのシステムを開発して導入するスタイル
              </strong>
              です。
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              一般的には「発注者（顧客）」と「受注者（開発会社）」という関係で、顧客が「こういう機能が欲しい」と要件を提示し、開発会社がそれに基づいてシステムを作成します。
            </p>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                受託開発の特徴
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • カスタム開発
                  </p>
                  <p className="text-sm text-slate-700">
                    顧客の特定のニーズに合わせて、専用のシステムを一から開発します。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 買い切り型の契約
                  </p>
                  <p className="text-sm text-slate-700">
                    開発費用を一度に支払い、完成したシステムを納品する形が一般的です。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 要件定義が重要
                  </p>
                  <p className="text-sm text-slate-700">
                    開発前に「何を作るか」を詳細に決める必要があり、後からの変更には追加費用がかかることが多いです。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    • 顧客が所有者
                  </p>
                  <p className="text-sm text-slate-700">
                    完成したシステムは顧客のものとなり、運用や保守も顧客の責任となります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* なぜ受託開発だと「失敗」しやすいのか */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            なぜ受託開発だと「失敗」しやすいのか？
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            受託開発が失敗しやすい理由は、システム開発の本質的な特性と従来の契約モデルのミスマッチにあります。
          </p>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                発注者が、システム発注の専門家ではないから
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                必要な要望を整理して発注するためには、そのためのノウハウと時間コストが必要になります。
              </p>
              <p className="text-slate-700 leading-relaxed">
                大手企業であれば、システム開発を発注するためのシステム部門などに専任の担当者がいることもありますが、一般的な中小企業や個人事業主はそこまでのコストをかけることが難しいことが実情であると思います。完璧な要件定義書を作成するには、システム開発に関する知識や経験が必要であり、本来の業務に集中すべき時間を割かれてしまいます。
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                変更に弱いから
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                システム開発では往々にして「こういう機能もつけてほしかった」「使ってみたけどやっぱりこうしてほしい」など、事前に詰めきれなかった要望があったり、事前イメージと結果が違うものになることがよくあります。
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                また、開発側の落ち度でバグや不具合が発生するケースもあります。
              </p>
              <p className="text-slate-700 leading-relaxed">
                こういった修正や要望の１つ１つに対して都度の精算と事前合意・事後確認を繰り返すことに時間・コミュニケーション・精算コストが大きく発生します。その結果、本来の目的である「業務改善」から目が離れ、契約管理やコスト調整に労力が奪われてしまいます。
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                システムの価値は「つくられること」ではなく「つかわれること」だから
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                システムは、作られた瞬間に価値が発生することはありません。
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                そのシステムが実際にユーザーに使われて、便利だと感じていただき、業務効率が改善したときに価値が発生します。
              </p>
              <p className="text-slate-700 leading-relaxed">
                つまりユーザーは「つかうこと」に対して料金を支払い、開発者は「つかわれること」に対して報酬を得られればよいということです。受託開発では「作ること」に対して対価を支払うため、実際に使われて価値が生まれるかどうかは別問題になってしまいます。
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                システム開発に終わりはないから
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                ビジネスは絶えず変化し、システムに求められることも常に変化していきます。
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                １つのシステムを開発して終わりということはなく、常に進化しつづけていく必要があります。
              </p>
              <p className="text-slate-700 leading-relaxed">
                このためアフターフォローや追加開発も含めて、継続的・持続的な関係を構築することはユーザー・開発者側の両方にとって価値があります。受託開発では「納品完了」がゴールになりがちですが、本当の価値はその後の継続的な改善と進化にこそあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaaSモデルで先生が得られるメリット */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            SaaSモデルで先生が得られるメリット
          </h2>
          <p className="text-center text-slate-600 mb-8 text-lg">
            私がSaaSとして開発することで、先生には以下のメリットがあります。
          </p>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                低コスト・低リスク
              </h3>
              <p className="text-slate-700 leading-relaxed">
                大きな初期投資をせず、使っている期間に対しての料金で常に最新のシステムを使えます。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                「小さく作る」「とりあえず試す」ができる
              </h3>
              <p className="text-slate-700 leading-relaxed">
                小さな単位で作りながら、「ここをこうしてほしい」というフィードバックを即座に反映することができます。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                いつでもやめることができる
              </h3>
              <p className="text-slate-700 leading-relaxed">
                受託開発であればサンクコストが発生し、それを回収するためのプレッシャーが発生します。
                <br />
                月額契約などの継続契約のSaaSモデルであれば、もし不要になったり想定したレベルに至らない場合はやめることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaaSモデルとナカムラによるデメリット */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            SaaSモデルとナカムラによるデメリット
          </h2>
          <p className="text-center text-slate-600 mb-8 text-lg">
            SaaSモデルであることと、私という個人によるサービス提供には以下のようなデメリットがあります。
          </p>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                システムと業務ノウハウを独占できなくなる
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                開発初期は貴事務所の業務効率を改善するためのシステム開発に100%コミットします。
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                しかし、将来的にSaaSとして再販可能になった場合は、私の所有権によって外部の行政書士事務所へシステムを提供することになります。（これによって開発費用を広く回収することで、１社当りが負担する料金を下げるためです）
              </p>
              <p className="text-slate-700 leading-relaxed">
                貴事務所から得られた業務課題・ノウハウによってつくられたシステムを再販するということは、行政書士の市場において競争優位性を得られなくなってしまう可能性もあります
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                私が言うことを聞かない可能性がある
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                貴事務所の業務効率を改善するために100%コミットする所存ですが、一方で、開発に対する報酬を得ないということは、開発は私のイニシアチブで遂行されるということになります。
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                先生からいただいた要望通りのモノをつくる、とは断言できません。あまりにも共通化できない機能などは作成しないことも（長期目線では）あります。
              </p>
              <p className="text-slate-700 leading-relaxed">
                ですがこれは「要望をもらった以上のアイデアを出して応える」という意思であります。また私は要望待ちをせずに、自走してシステムを開発して、ご提案していきます。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                私という「個人」の活動に依存するリスクがあること
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                万が一、私に不測の事態（病気や廃業など）が発生した場合、システムの保守やアップデートが止まってしまう可能性があります。現段階で長期的な保証を法律的に契約、お約束することができません。
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                大手のような技術力、大きな開発力や、永続的な保証やサポートが提示できません。
              </p>
              <p className="text-slate-700 leading-relaxed">
                その分、先生の声をダイレクトに反映できるスピード感と、柔軟な対応で補わせていただきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 先生にお願いしたいこと */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            先生にお願いしたいこと
          </h2>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              システム開発は短期・一過性のものではなく長期的なパートナーシップが不可欠です。そのため、先生には以下のことをお願いしたいと考えています。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">
                  ✓
                </div>
                <p className="text-slate-700 leading-relaxed">
                  困っていることや課題や要望などをおしえていただくこと
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">
                  ✓
                </div>
                <p className="text-slate-700 leading-relaxed">
                  システムを使っていただくこと
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">
                  ✓
                </div>
                <p className="text-slate-700 leading-relaxed">
                  ナカムラにあまり報酬を払わないこと
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
            想定されるご質問
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Q.
                ナカムラは報酬をもらわなくて大丈夫なの？また、もらわない場合は時間を捻出できるの？
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-600">A.</strong>{" "}
                  別の準委任契約のエンジニア案件で月90時間の仕事をしているため、生活資金と時間の両立が可能になっています。
                </p>
                <p>
                  この契約形態により、安定した収入基盤を確保しながら、SaaS開発に必要な時間を確保できる体制が整っています。開発作業は業務時間内で計画的に進めていくことができます。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Q. もし報酬を払いたくなったらナカムラは受け取ってくれる？
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-600">A.</strong>{" "}
                  私から請求することは当面少なくとも2026年中、考えていません。
                </p>
                <p>
                  値付けや、短期的・即物的な報酬を感じてしまうことがノイズに感じてしまうためです。
                </p>
                <p>
                  しかし、報酬を払っていただける分にはありがたいので受け取ります。もし報酬をいただける場合でも「つくった作業時間に対する報酬」ではなく「先生が享受した価値」で精算したいです。
                </p>
                <p>
                  その辺りは、この活動が軌道に乗ってきたと感じたときにあらためてお話できればと思います。
                </p>
                <p>
                  SaaSが実運用になったときは1アカウントにつき3000円程度の料金プランにするつもりです。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Q.
                金銭的合意がない場合にナカムラがちゃんとやってくれるかが不安、またはどのぐらいやってくれるかが不安
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-600">A.</strong>{" "}
                  実際の活動で、証明と、期待値の調整をさせていただければと思います。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Q. なんで貴事務所のためにそこまでやるの？
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>友人を雇ってくれているから</li>
                  <li>先生が良い人そうだから</li>
                  <li>
                    貴事務所のスタッフ、お客様などすべての関係者にメリットがあるから
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Q. 将来のビジョンについて
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-600">A.</strong>{" "}
                  エンジニアひいては仕事人生の野望として「人類単位でムダを減らすこと」が使命です。
                </p>
                <p>
                  このために1つのSaaSを開発して大勢でシェアするという手段が最適です。ここに、先生が行政書士事務所として課題をもっていることと私の利害が一致します。
                </p>
                <p>
                  超将来的にはこのネタで起業して社長になります。それはより多くの人々の業務を効率化し、無駄を削減することで社会に貢献したいという想いからです。
                </p>
                <p>
                  先生の事務所との協働は、この大きな目標に向けた第一歩であり、実践的な課題解決を通じて価値あるプロダクトを生み出していきたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
