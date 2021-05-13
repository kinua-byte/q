const LRU = require("./LRU_Cache");

test("登録した要素を取得できる", () => {
    const lru = new LRU(2);
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    expect(lru.get("a")).toBe("dataA");
    expect(lru.get("b")).toBe("dataB");
});

test("キャッシュサイズを超えた場合、古いものが削除される", () => {
    const lru = new LRU(2);
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    lru.put("c", "dataC");
    expect(lru.get("a")).toBeUndefined();
    expect(lru.get("b")).toBe("dataB");
    expect(lru.get("c")).toBe("dataC");
});

// /// その他のテストを書く
// test("使われた場合最新のものと入れ替わる", () => {
//     const lru = new LRU(2);
//     lru.put("a", "dataA");
//     lru.put("b", "dataB");
//     lru.get("a");
//     lru.put("c", "dataC");
//     expect(lru.get("a")).toBe("dataA");
//     expect(lru.get("b")).toBeUndefined();
//     expect(lru.get("c")).toBe("dataC");
// }
// )