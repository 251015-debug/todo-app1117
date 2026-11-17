import { appVersion } from "@/lib/config"

export const metadata = {
  title: 'このアプリについて | TODOアプリ',
}



export default function AboutPage() {
  return (
    <main className="container">
      <h1>このアプリについて</h1>
      <p>バージョン:{appVersion}</p>
      <p>{process.env.SECRET_WORD}</p>
      <p>「Webフロントエンド」の授業で作っている TODO アプリです。</p>
      <ul>
        <li>Next.js（App Router）</li>
        <li>データはブラウザの localStorage に保存</li>
      </ul>
    </main>
  )
}
