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
      this[key] = data ,(this.count);
      this.count++;
    }

    // 最大サイズ以上なら削除して、要素を取得する
    get(key) {
      // コードを書く
      // this.count = this.length;
      if(this.count > this.size){

        this[this.count == 0] = undefined;
      }
      return this[key];
    }
}
module.exports = LRU;