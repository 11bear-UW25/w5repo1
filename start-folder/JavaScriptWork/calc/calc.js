// HTML要素の取得
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const resultParagraph = document.getElementById('result');

// 計算と表示の更新を行うメイン関数
function calculate() {
    const val1Str = num1Input.value;
    const val2Str = num2Input.value;
    const operator = operatorSelect.value;

    // 値が入力されていない場合、「両方の数値を入力してください」と表示する
    if (val1Str === "" || val2Str === "") {
        resultParagraph.textContent = "両方の数値を入力してください";
        resultParagraph.style.color = "#4c407f";
        return;
    }

    // 文字列を数値に変換
    const val1 = parseFloat(val1Str);
    const val2 = parseFloat(val2Str);
    let result = 0;

    // 割り算の場合、値2に0が入ると「0で割る事はできません。」と表示する
    if (operator === '/' && val2 === 0) {
        resultParagraph.textContent = "0で割る事はできません。";
        resultParagraph.style.color = "#ea07cc";
        return;
    }

    // 足し算、引き算、掛け算、割り算が出来る状態
    switch (operator) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        default:
            resultParagraph.textContent = "エラーが発生しました";
            return;
    }

    // 小数の計算誤差を丸める処理（最大小数点以下10桁）
    const formattedResult = Number(result.toFixed(10));

    // 全て値が入力されている状態だと計算式とその結果が表示されること
    resultParagraph.textContent = `${val1} ${operator} ${val2} = ${formattedResult}`;
    resultParagraph.style.color = "#4c407f"; 
}

// 値の変更を行うと動的に結果の表示が変化すること
num1Input.addEventListener('input', calculate);
num2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);
