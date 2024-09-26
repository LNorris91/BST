import Tree from './tree.js';

// Odin Project's code snippet for visualizing the node tree
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

// Returns an array of a random length <50 with random numbers <100
function randomArray() {
  let arr = [];
  let arrLength = Math.floor(Math.random() * 50);

  for (let i = 0; i < arrLength; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

const testArray = [1, 4, 43, 12, 55, 78, 55, 10];
const randomTree = new Tree(randomArray());

prettyPrint(randomTree.root);
