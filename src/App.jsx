import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("map");

  if (screen === "convenience") {
    return (
      <div>
        <h1>🏪 コンビニ</h1>

        <p>店員：お弁当は温めますか？</p>

        <button>お願いします</button>

        <br /><br />

        <button>結構です</button>

        <br /><br />

        <button onClick={() => setScreen("map")}>
          マップへ戻る
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>日本語学習ワールド</h1>

      <h2>施設一覧</h2>

      <button onClick={() => setScreen("convenience")}>
        🏪 コンビニ
      </button>

      <br /><br />

      <button>
        🏨 ホテル
      </button>

      <br /><br />

      <button>
        🍜 ラーメン屋
      </button>

      <br /><br />

      <button>
        💊 ドラッグストア
      </button>
    </div>
  );
}

export default App;