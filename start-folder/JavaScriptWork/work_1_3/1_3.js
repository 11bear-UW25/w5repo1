// 関数1：getTotalPrice
const getTotalPrice = (price, quantity) => {
    return price * quantity;
};

// 関数2：addTax
const addTax = total => {
    return Math.floor(total * 1.1);
};

// --- 実行とコンソール出力パート ---

// 1. 税抜の合計金額を計算
const total = getTotalPrice(1000, 2); 

// 2. 税抜金額を出力
console.log(`税抜金額は${total}円です`);

// 3. 税込の金額を計算
const taxedTotal = addTax(total);     

// 4. 税込金額を出力
console.log(`税込金額は${taxedTotal}円です`);