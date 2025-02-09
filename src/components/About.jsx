// src/components/About.jsx
import  { useState, useEffect } from "react";

import { HoverEffect } from "./ui/card-hover-effect";

export default function About() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. 初回マウント時にfetchでデータを取りに行く
  useEffect(() => {
    fetch("http://localhost:3000/api/items") 
      .then((response) => {
        if (!response.ok) {
          // ステータスコードが200番台以外の場合、エラー扱いにする
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json(); // JSONをJavaScriptオブジェクトにパース
      })
      .then((data) => {
        // データ取得成功
        setItems(data);      // ステートに格納
        setLoading(false);   // ローディング完了
      })
      .catch((err) => {
        // 通信エラーやJSONパースエラー
        setError(err);
        setLoading(false);
      });
  }, []);
  // 第二引数[]を入れることでコンポーネント初回表示時だけ実行

  // 3. ローディング中の表示
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  // 4. エラーがあれば表示
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  // 5. 取得完了: 画面描画
  return (
    <section className="w-full h-full py-20">
      <h2
        className="
          max-w-7xl
          mx-auto
          text-center
          text-3xl
          md:text-5xl
          font-bold
          text-white
          dark:text-neutral-200
          font-sans
          px-4
        "
      >
        About me
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* 
          HoverEffectに、サーバーから取得した items を渡す。
          これまでは import { items } ... でハードコードされた配列を使っていたが、
          今回はfetch結果をステートから渡している。
        */}
        <HoverEffect items={items} />
      </div>
    </section>
  );
}
