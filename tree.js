import Node from './node.js';

export default class Tree {
  constructor(array) {
    this.array = this.refineArray(array);
    this.root = this.buildTree(this.array);
  }

  refineArray(array) {
    let refinedArray = [];
    let sortedArray = array.sort(function (a, b) {
      return a - b;
    });
    sortedArray.forEach((element) => {
      if (!refinedArray.includes(element)) {
        refinedArray.push(element);
      }
    });

    console.log(refinedArray);
    return refinedArray;
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    console.log(node);
    return node;
  }

  insert(value) {
    this.findInsert(this.root, value);
  }

  findInsert(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (root.data === value) {
      return root;
    }

    if (value < root.data) {
      root.left = this.findInsert(root.left, value);
    } else if (value > root.data) {
      root.right = this.findInsert(root.right, value);
    }

    return root;
  }

  findSuccessor(current) {
    current = current.right;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  deleteItem(value) {
    this.findDeleteItem(this.root, value);
  }

  findDeleteItem(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.data) {
      root.left = this.findDeleteItem(root.left, value);
    } else if (value > root.data) {
      root.right = this.findDeleteItem(root.right, value);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let succ = this.findSuccessor(root);
      root.data = succ.data;
      root.right = this.findDeleteItem(root.right, succ.data);
    }
    return root;
  }

  find(value) {
    this.search(this.root, value);
  }

  search(root, value) {
    if (root === null) return console.log('value not found');

    if (root.data === value) return console.log(root);

    if (value < root.data) this.search(root.left, value);
    else if (value > root.data) this.search(root.right, value);
  }
}
