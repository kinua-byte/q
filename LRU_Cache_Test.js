class Box {
  public void show() {
    System.out.println()
  }

}
//入れ物を作る
//test
function accepta(a) {
  Box box = new Box();
 Box.push(a)  

  assertEquals("a",box.show())
}
module.experts = accepta