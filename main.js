import Tree from './tree.js';
const newArray = [1, 4, 43, 12, 55, 78, 55, 10];
const maple = new Tree(newArray);

function prettyPrint(node, prefix = '', isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

maple.insert(33);
maple.insert(9);
maple.insert(8);
maple.insert(7);
maple.deleteItem(4);
prettyPrint(maple.root);
maple.postOrder(maple.printNode);
console.log(maple.height(33));
