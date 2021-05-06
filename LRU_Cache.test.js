// const { test, expect } = require("@jest/globals");
// var box = require('./LRU_Cache_Test.js');

// test('boxを作る ', () => {

//   // const box = [ ];

//   // box.push('a')  ;
//   //検証(assert)
//   //aが入っているか確認
//   //expect(box.obj.class.array).toContain('a');
//   //要素数確認
//   expect(box.obj.class.array).toHaveLength(0);
// } )
// test('aを追加する',() => {
//     expect(box.obj.class.array.push).toHaveLength(1);
// })

//new
const LRU = require("./LRU_Cache");

test("登録した要素を取得できる", () => {
    const lru = new LRU(2);
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    expect(lru.get("a")).toBe("dataA");
    expect(lru.get("b")).toBe("dataC");
});

test("キャッシュサイズを超えた場合、古いものが削除される", () => {
    const lru = new LRU(2);
    lru.put("a", "dataA");
    lru.put("b", "dataB");
    lru.put("c", "dataC");
    expect(lru.get("a")).toBeUndefined();
});

/// その他のテストを書く