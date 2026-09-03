document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");

    // 🚩text-align: center; と display: block; を追加して、確実に文字を真ん中に寄せる
    if (!username) {
        resultDiv.innerHTML = `<p style="color: #ea07cc; font-weight: bold; text-align: center; width: 100%; margin: 0; display: block;">ユーザー名を入力してください。</p>`;
        return;
    }

    // 通信中の表示も真ん中に寄せる
    resultDiv.innerHTML = `<p style="text-align: center; width: 100%; margin: 0; display: block;">検索中...</p>`;

    // GitHub APIを使ってデータを取得
    fetch(`https://github.com{username}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("ユーザーが見つかりませんでした。");
            }
            return res.json();
        })
        .then(data => {
            // 結果画面の生成
            resultDiv.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; text-align: center;">
                    <img src="${data.avatar_url}" alt="アイコン画像" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ea07cc; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <div style="text-align: left; width: 100%; font-size: 16px; line-height: 1.8;">
                        <p style="margin: 5px 0;"><strong>ユーザー名：</strong>${data.login}</p>
                        <p style="margin: 5px 0;"><strong>名前：</strong>${data.name || "未設定"}</p>
                        <p style="margin: 5px 0;"><strong>フォロワー数：</strong>${data.followers} 人</p>
                        <p style="margin: 5px 0;"><strong>公開リポジトリ数：</strong>${data.public_repos}</p>
                    </div>
                </div>
            `;
        })
        .catch(err => {
            // エラー時の表示も真ん中に寄せます
            resultDiv.innerHTML = `<p style="color: #ea07cc; font-weight: bold; text-align: center; width: 100%; margin: 0; display: block;">❌ ${err.message}</p>`;
        });
});

// 入力欄でEnterキーが押されたときも、検索ボタンをクリックした時と同じ処理を動かす
document.getElementById("username").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("searchBtn").click();
    }
});