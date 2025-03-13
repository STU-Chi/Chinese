const input = document.querySelector("#inputText") // 選擇用戶輸入的文本區域
  , outputText = document.querySelector("#output") // 選擇用於顯示輸出結果的元素
  , matchString = (t, e) => {
    if (!e) return null; // 如果未傳入匹配字串，返回 null
    for (let n = 0; n < e.length; n++) {
        if ("" === e[n]) continue; // 跳過空字符串
        const r = e[n].split("/").map((t => t.includes("*") ? t.replace(/\*/g, ".*?") : `^${t}$`));
        for (const e of r) {
            if (new RegExp(e).test(t)) return n; // 如果匹配成功，返回索引
        }
    }
    return null; // 沒有匹配成功，返回 null
  }
  , toPhonic = t => { // 將輸入的文字轉換為注音的函數
    const e = t.split(""); // 將輸入字符串分割為字符數組
    let n = ""; // 初始化輸出結果字符串
    e.forEach((e => {
        const r = phonic[e]; // 獲取字符的對應注音
        if (r) // 如果有對應的注音
            if (Array.isArray(r)) { // 如果是多音字
                const u = poyin[e], // 獲取多音字的條件
                      i = matchString(t, u); // 獲取匹配的索引
                n += i ? r[i] : r[0]; // 根據索引選擇讀音
            } else
                n += r; // 單音字直接加上對應的注音
        else
            n += e; // 如果沒有對應注音，保留原字符
    }));
    outputText.innerText = n; // 將結果顯示到 outputText 元素中
  }
;

// 監聽用戶的輸入事件
input.addEventListener("input", (t => {
    const e = t.target.value; // 獲取用戶當前輸入的值
    toPhonic(e); // 調用轉換函數
}));

toPhonic(input.value); // 在初始化時轉換當前的輸入值