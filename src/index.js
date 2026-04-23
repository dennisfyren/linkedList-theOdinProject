import { LinkedList } from "./linkedList.js";

let list = new LinkedList();
console.log(list);

list.append("lion");
list.append("tiger");
list.append("elephant");
list.append("giraffe");
list.append("zebra");
list.append("kangaroo");
list.append("koala");
list.append("panda");
list.append("penguin");
list.append("dolphin");

console.log(list.getHead());
console.log(list.getTail());
console.log(list.getIndex(4));
console.log(list.getSize());
list.prepend("donkey");
console.log(list.getSize());
console.log(list.contains("zebra"));
console.log(list.contains("donkey kong"));
console.log(list.pop());
