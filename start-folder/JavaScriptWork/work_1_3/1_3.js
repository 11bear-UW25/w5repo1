// 🚩関数1：getTotalPrice
// 引数は price（価格）と quantity（個数）
const getTotalPrice = (price, quantity) => price * quantity; 

// 🚩関数2：addTax
// 引数は total（数値の金額）に10%の税金を加えて返す（小数点以下切り捨て）
const addTax = total => Math.floor(total * 1.1); 

// --- ここから下は問題文に指定された通りのコードの形（穴埋め完了版） --- 

const total = getTotalPrice(1000, 2); // → 2000 

// 「税抜金額は2000円です」とコンソールに出力
console.log(税抜金額は${total}円です); 

const taxedTotal = addTax(total);     // → 2200 

// 「税込金額は2200円です」とコンソールに出力
console.log(税込金額は${taxedTotal}円です);