export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    return this;
  }
  contains(value: number) {
    return this;
  }
  remove(value: number) {
    return this;
  }
}