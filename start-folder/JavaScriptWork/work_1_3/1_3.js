// 税抜金額を返す関数
const getTotalPrice = (price, quantity) => {
  const total = price * quantity;
  return `合計金額は${total}円です`;
};

// 税込金額を返す関数（10%加算）
const addTax = total => {
  return Math.floor(total * 1.1);
};

// 税抜金額の計算（数値）
const totalPriceNumber = 1000 * 2; // 2000

// 税抜金額の文字列（関数の返り値）
const totalPriceText = getTotalPrice(1000, 2);
console.log(`税抜金額は${totalPriceNumber}円です`);

// 税込金額の計算
const taxedTotal = addTax(totalPriceNumber);
console.log(`税込金額は${taxedTotal}円です`);

