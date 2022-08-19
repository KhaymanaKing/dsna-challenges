class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
    if(node.value < this.value){
        if(!this.left){
            this.left = node;
        } else {
            this.left.add(node)
        } 
    } else { 
        if(!this.right) {
            this.right = node;
        } else {
            this.right.add(node);
        }
    }
  }
}

test("it should add a new thing to the binary tree", () => {
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

B.add(A);
B.add(D);
B.add(C);

expect(B.left).toBe(A);
expect(B.right).toBe(D);
expect(C.right).toBe(null);
});