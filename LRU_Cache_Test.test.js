const { test, expect } = require("@jest/globals");
// const { app } = require("./LRU_Cache_Test");
var box = require('./LRU_Cache_Test.js');

test('boxにaを入れる ', () => {

  // const box = [ ];

  // box.push('a')  ;
  //検証(assert)
  //aが入っているか確認
  expect(box.obj.class.array).toContain('a');
  //要素数確認
  expect(box.obj.class.array).toHaveLength(1);
} )