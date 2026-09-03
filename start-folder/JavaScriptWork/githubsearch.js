document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");

    // ユーザー名が未入力の場合（中央寄せ・背景透明）
    if (!username) {
        resultDiv.style.background = "transparent";
        resultDiv.style.boxShadow = "none";
        resultDiv.style.padding = "10px";
        resultDiv.style.maxWidth = "none";
        resultDiv.style.margin = "20px auto";
        resultDiv.innerHTML = `<p style="color: #ea07cc; font-weight: bold; text-align: center; width: 100%; margin: 0; display: block;">ユーザー名を入力してください。</p>`;
        return;
    }

    // 通信中の表示（中央寄せ・背景透明）
    resultDiv.style.background = "transparent";
    resultDiv.style.boxShadow = "none";
    resultDiv.style.padding = "10px";
    resultDiv.style.maxWidth = "none";
    resultDiv.style.margin = "20px auto";
    resultDiv.innerHTML = `<p style="text-align: center; width: 100%; margin: 0; display: block;">検索中...</p>`;

    // GitHub APIを使ってデータを取得
    fetch(`https://github.com{username}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("ユーザーが見つかりませんでした");
            }
            return res.json();
        })
        .then(data => {
            // 検索成功時：背景を白にし、幅を300pxにして中央寄せ
            resultDiv.style.background = "#ffffff";
            resultDiv.style.borderRadius = "8px";
            resultDiv.style.padding = "20px";
            resultDiv.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
            resultDiv.style.maxWidth = "300px";
            resultDiv.style.margin = "20px auto";

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
            // エラー発生時：背景を白にし、幅を入力欄と同じ300pxにして中央寄せ
            resultDiv.style.background = "#ffffff";
            resultDiv.style.borderRadius = "8px";
            resultDiv.style.padding = "15px";
            resultDiv.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
            resultDiv.style.maxWidth = "300px";
            resultDiv.style.margin = "20px auto";
            
            resultDiv.innerHTML = `<p style="color: #ea07cc; font-weight: bold; text-align: center; width: 100%; margin: 0; display: block;">❌ ${err.message}</p>`;
        });
});

// 入力欄でEnterキーが押されたとき 検索を動かす
document.getElementById("username").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("searchBtn").click();
    }
});