import { LinkedList } from "./linkedList.js";

let list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list);
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getIndex(4));

console.log(list.contains("snake"));
