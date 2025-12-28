import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 環境変数のチェック（最初に確認）
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { success: false, error: "サーバー設定エラーが発生しました。" },
        { status: 500 }
      );
    }

    if (!process.env.RECIPIENT_EMAIL) {
      console.error("RECIPIENT_EMAIL is not set");
      return NextResponse.json(
        { success: false, error: "サーバー設定エラーが発生しました。" },
        { status: 500 }
      );
    }

    // Resendクライアントの初期化
    const resend = new Resend(process.env.RESEND_API_KEY);

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false, error: "リクエストの形式が正しくありません。" },
        { status: 400 }
      );
    }

    const { name, email, category, message } = body;

    // バリデーション
    if (!name || !email || !category) {
      return NextResponse.json(
        { success: false, error: "必須項目をすべて入力してください。" },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "有効なメールアドレスを入力してください。" },
        { status: 400 }
      );
    }

    // メール送信
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Resendのデフォルト送信元（後で変更可能）
      to: process.env.RECIPIENT_EMAIL,
      subject: `【お問い合わせ】${category} - ${name}様より`,
      html: `
        <h2>お問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせカテゴリー:</strong> ${category}</p>
        <p><strong>メッセージ:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "メールの送信に失敗しました。しばらくしてから再度お試しください。",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "予期しないエラーが発生しました。" },
      { status: 500 }
    );
  }
}
