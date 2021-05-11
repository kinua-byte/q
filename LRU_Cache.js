
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
      // size はLRUキャッシュ最大のサイズ
      // countは現在のサイズ
      // コードを書く
      this.size = size;
      this.count = 0;
    }

    // 要素を追加し、現在のサイズをカウントする
    put(key, data) {
      // コードを書く
      this[key] = data;
      this.count++;
    }

    // 最大サイズ以上なら削除して、要素を取得する
    get(key) {
      // コードを書く
      // this.count = this.length;
      if(this.count > this.size){

        this["a"] = undefined;
      }
      return this[key];
    }
}
module.exports = LRU;