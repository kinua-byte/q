
// var obj={
//  //name: 'a'
//    class: new class Bar {
//     constructor() {
//       this.array = [];

//     }
//     foo() {}
//   }
// }
// // function obj(mark) {
// //   class: class Bar {
// //     constructor() {
// //       this.array = this.array.put(mark)
// //     }
// //   }
// // }

// function PUSH(a) {
//   this.array = obj.class.array.push(a)

// }

// exports.obj = obj
// exports.PUSH = PUSH

//new
class LRU {
    constructor(size) {
      // size はLRUキャッシュのサイズ
      // コードを書く
      this.size =size;
    }

    // 要素を追加する
    put(key, data) {
      // コードを書く
      this[key] = data;
    }

    // 要素を取得する
    get(key) {
      // コードを書く
      return this[key];
    }
}
module.exports = LRU;