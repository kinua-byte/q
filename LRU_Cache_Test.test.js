const { test, expect } = require("@jest/globals");
// const { app } = require("./LRU_Cache_Test");
const app = require('./LRU_Cache_Test');

test('boxにaを入れる ', () => {

  // const box = [ ];

  // box.push('a')  ;
  //検証(assert)
  // expect(app.array.length).toEqual(0);
  // expect(app.class).toEqual('Bar');
  // //expect(app.class.array).toEqual('a');
  // expect(app.class.array.length).toEqual(1);
  expect(app.number).toEqual(12)
} )